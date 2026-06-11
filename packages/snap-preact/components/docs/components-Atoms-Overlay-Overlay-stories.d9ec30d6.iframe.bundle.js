(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[8982],
		{
			'./components/src/components/Atoms/Overlay/Overlay.stories.tsx'(m, s, e) {
				'use strict';
				e.r(s), e.d(s, { Default: () => c, __namedExportsOrder: () => u, default: () => y });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					r = e('./components/src/components/Atoms/Overlay/Overlay.tsx'),
					i = e('./components/src/utilities/storybook.tsx'),
					a = e('./components/src/utilities/componentArgs.ts');
				const o =
						"# Overlay\n\nRenders an Overlay. Typically used to blur the background with a foreground element such as a modal or slideout menu.\n\n## Usage\n```tsx\nimport { Overlay } from '@athoscommerce/snap-preact/components';\n```\n\n### active\nThe required `active` prop specifies when to render the component.\n\n```tsx\n<Overlay active={true} />\n```\n\n### color\nThe `color` prop specifies the color of the overlay.\n\n```tsx\n<Overlay active={true} color={'rgba(0,0,0,0.8)'} />\n```\n\n### transitionSpeed\nThe `transitionSpeed` prop specifies animation transition speed.\n\n```tsx\n<Overlay active={true} transitionSpeed='0.5s' />\n```\n\n### Events\n\n#### onClick\nThe `onClick` prop allows for a custom callback function.\n\n```tsx\n<Overlay active={true} onClick={(e)=>{console.log(e)}} />\n```\n",
					y = {
						title: 'Atoms/Overlay',
						component: r.h,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, n.FD)('div', {
										children: [(0, n.Y)(l.oz, { options: { overrides: { code: i.Z } }, children: o }), (0, n.Y)(l.uY, { story: l.h1 })],
									}),
							},
						},
						argTypes: {
							active: {
								description: 'Overlay is displayed',
								type: { required: !0 },
								table: { type: { summary: 'boolean' }, category: 'Templates Legal', defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							color: {
								defaultValue: 'rgba(0,0,0,0.8)',
								description: 'Overlay color',
								table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: 'rgba(0,0,0,0.8)' } },
								control: { type: 'color' },
							},
							transitionSpeed: {
								defaultValue: '0.25s',
								description: 'Overlay opening/closing transition speed',
								table: { type: { summary: 'string' }, category: 'Templates Legal', defaultValue: { summary: '0.25s' } },
								control: { type: 'text' },
							},
							onClick: {
								description: 'Overlay click event handler',
								table: { type: { summary: 'function' }, category: 'Templates Legal' },
								control: { type: 'none' },
								action: 'onClick',
							},
							...a.F,
						},
					},
					c = (p) => (0, n.Y)(r.h, { ...p });
				(c.args = { active: !0 }),
					(c.parameters = {
						...c.parameters,
						docs: {
							...c.parameters?.docs,
							source: { originalSource: '(args: OverlayProps) => <Overlay {...args} />', ...c.parameters?.docs?.source },
						},
					});
				const u = ['Default'];
			},
			'./components/src/components/Atoms/Overlay/Overlay.tsx'(m, s, e) {
				'use strict';
				e.d(s, { h: () => f });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/classnames/index.js'),
					i = e.n(r),
					a = e('./components/src/providers/cache.tsx'),
					o = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					y = e('./components/src/providers/treePath.tsx'),
					c = e('./components/src/utilities/mergeProps.ts'),
					u = e('./components/src/utilities/mergeStyles.ts'),
					p = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					t = e('./components/src/hooks/useA11y.tsx');
				const v = ({ transitionSpeed: d, color: _ }) =>
					(0, l.AH)({
						transition: `background ${d} ease 0s, left 0s ease ${d}`,
						position: 'fixed',
						zIndex: '10003',
						height: '100%',
						width: '100%',
						top: '0',
						left: '-100%',
						'&.ss__overlay--active': { transition: `background ${d} ease, left 0s ease`, background: _, left: '0' },
					});
				function f(d) {
					const _ = (0, o.u)(),
						b = { color: 'rgba(0,0,0,0.8)', transitionSpeed: '0.25s', treePath: (0, y.LU)() },
						E = (0, c.v6)('overlay', _, b, d),
						{ active: O, onClick: h, disableA11y: x, className: D, internalClassName: P } = E,
						{ overrideElement: C, shouldRenderDefault: T } = (0, p._)('overlay', E);
					if (!T) return C;
					const A = (0, u.Z)(E, v);
					return (0, n.Y)(a._, {
						children: (0, n.Y)('div', {
							onClick: (g) => h && O && h(g),
							ref: (g) => (x ? null : (0, t.iy)(g, O ? 0 : -1)),
							className: i()('ss__overlay', { 'ss__overlay--active': O }, D, P),
							...A,
						}),
					});
				}
			},
			'./components/src/hooks/useA11y.tsx'(m, s, e) {
				'use strict';
				e.d(s, { DH: () => i, aZ: () => r, iy: () => a });
				const n = 9,
					l = 27,
					r = 'ss-a11y',
					i =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function a(o, y, c, u) {
					const p = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${p}`)) {
						const t = document.createElement('style');
						(t.type = 'text/css'),
							(t.id = p),
							(t.innerHTML = `[${r}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(t);
					}
					o &&
						!o.attributes?.[r] &&
						(o.setAttribute(r, !0),
						o.setAttribute('tabIndex', `${y || 0}`),
						o.addEventListener('keydown', (t) => {
							(t.code === 'Space' || t.code === 'Enter') && o.click();
						}),
						c &&
							o.addEventListener('keydown', function (t) {
								const v = o.querySelectorAll(i),
									f = v[0],
									d = v[v.length - 1];
								if (t.keyCode == l) {
									o.focus(), u && u(t), t.preventDefault(), t.stopPropagation();
									return;
								}
								(t.key === 'Tab' || t.keyCode === n) &&
									(t.shiftKey
										? document.activeElement === f && (d.focus(), t.preventDefault())
										: document.activeElement === d && (f.focus(), t.preventDefault()));
							}));
				}
			},
			'./components/src/utilities/componentArgs.ts'(m, s, e) {
				'use strict';
				e.d(s, { F: () => n });
				const n = {
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
			'./components/src/utilities/storybook.tsx'(m, s, e) {
				'use strict';
				e.d(s, { Z: () => i });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const r = 'prism-block',
					i = (a) => {
						const o = (0, l.li)(null);
						return (
							(0, l.vJ)(() => {
								o.current && a.className?.includes('lang-') && !a.className?.includes(r) && window?.Prism?.highlightElement(o.current);
							}, [a.className, a.children, o]),
							(0, n.Y)('code', { ...a, ref: o, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(m) {
				function s(e) {
					var n = new Error("Cannot find module '" + e + "'");
					throw ((n.code = 'MODULE_NOT_FOUND'), n);
				}
				(s.keys = () => []), (s.resolve = s), (s.id = '../../node_modules/memoizerific sync recursive'), (m.exports = s);
			},
		},
	]);
})();
