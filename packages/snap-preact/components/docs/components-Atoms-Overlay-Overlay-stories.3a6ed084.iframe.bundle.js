(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[8982],
		{
			'./components/src/components/Atoms/Overlay/Overlay.stories.tsx'(d, s, e) {
				'use strict';
				e.r(s), e.d(s, { Default: () => c, __namedExportsOrder: () => m, default: () => p });
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					r = e('./components/src/components/Atoms/Overlay/Overlay.tsx'),
					i = e('./components/src/utilities/storybook.tsx'),
					a = e('./components/src/utilities/componentArgs.ts');
				const o =
						"# Overlay\n\nRenders an Overlay. Typically used to blur the background with a foreground element such as a modal or slideout menu.\n\n## Usage\n```tsx\nimport { Overlay } from '@athoscommerce/snap-preact/components';\n```\n\n### active\nThe required `active` prop specifies when to render the component.\n\n```tsx\n<Overlay active={true} />\n```\n\n### color\nThe `color` prop specifies the color of the overlay.\n\n```tsx\n<Overlay active={true} color={'rgba(0,0,0,0.8)'} />\n```\n\n### transitionSpeed\nThe `transitionSpeed` prop specifies animation transition speed.\n\n```tsx\n<Overlay active={true} transitionSpeed='0.5s' />\n```\n\n### Events\n\n#### onClick\nThe `onClick` prop allows for a custom callback function.\n\n```tsx\n<Overlay active={true} onClick={(e)=>{console.log(e)}} />\n```\n",
					p = {
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
					c = (u) => (0, n.Y)(r.h, { ...u });
				(c.args = { active: !0 }),
					(c.parameters = {
						...c.parameters,
						docs: {
							...c.parameters?.docs,
							source: { originalSource: '(args: OverlayProps) => <Overlay {...args} />', ...c.parameters?.docs?.source },
						},
					});
				const m = ['Default'];
			},
			'./components/src/components/Atoms/Overlay/Overlay.tsx'(d, s, e) {
				'use strict';
				var n = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/classnames/index.js'),
					i = e.n(r),
					a = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('./components/src/providers/cache.tsx'),
					p = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					c = e('./components/src/providers/treePath.tsx'),
					m = e('./components/src/utilities/mergeProps.ts'),
					u = e('./components/src/utilities/mergeStyles.ts'),
					t = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					y = e('./components/src/hooks/useA11y.tsx');
				const f = ({ transitionSpeed: v, color: _ }) =>
						(0, l.AH)({
							transition: `background ${v} ease 0s, left 0s ease ${v}`,
							position: 'fixed',
							zIndex: '10003',
							height: '100%',
							width: '100%',
							top: '0',
							left: '-100%',
							'&.ss__overlay--active': { transition: `background ${v} ease, left 0s ease`, background: _, left: '0' },
						}),
					E = (0, a.PA)((v) => {
						const _ = (0, p.u)(),
							x = { color: 'rgba(0,0,0,0.8)', transitionSpeed: '0.25s', treePath: (0, c.LU)() },
							O = (0, m.v6)('overlay', _, x, v),
							{ active: g, onClick: b, disableA11y: D, className: P, internalClassName: C } = O,
							{ overrideElement: A, shouldRenderDefault: T } = (0, t._)('overlay', O);
						if (!T) return A;
						const M = (0, u.Z)(O, f);
						return (0, n.Y)(o._, {
							children: (0, n.Y)('div', {
								onClick: (h) => b && g && b(h),
								ref: (h) => (D ? null : (0, y.iy)(h, g ? 0 : -1)),
								className: i()('ss__overlay', { 'ss__overlay--active': g }, P, C),
								...M,
							}),
						});
					});
				e.d(s, ['h', 0, E]);
			},
			'./components/src/hooks/useA11y.tsx'(d, s, e) {
				'use strict';
				e.d(s, { iy: () => a });
				const n = 9,
					l = 27,
					r = 'ss-a11y',
					i =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function a(o, p, c, m) {
					const u = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${u}`)) {
						const t = document.createElement('style');
						(t.type = 'text/css'),
							(t.id = u),
							(t.innerHTML = `[${r}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(t);
					}
					o &&
						!o.attributes?.[r] &&
						(o.setAttribute(r, !0),
						o.setAttribute('tabIndex', `${p || 0}`),
						o.addEventListener('keydown', (t) => {
							(t.code === 'Space' || t.code === 'Enter') && o.click();
						}),
						c &&
							o.addEventListener('keydown', function (t) {
								const y = o.querySelectorAll(i),
									f = y[0],
									E = y[y.length - 1];
								if (t.keyCode == l) {
									o.focus(), m && m(t), t.preventDefault(), t.stopPropagation();
									return;
								}
								(t.key === 'Tab' || t.keyCode === n) &&
									(t.shiftKey
										? document.activeElement === f && (E.focus(), t.preventDefault())
										: document.activeElement === E && (f.focus(), t.preventDefault()));
							}));
				}
				e.d(s, ['DH', 0, i, 'aZ', 0, r]);
			},
			'./components/src/utilities/componentArgs.ts'(d, s, e) {
				'use strict';
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
				e.d(s, ['F', 0, n]);
			},
			'./components/src/utilities/storybook.tsx'(d, s, e) {
				'use strict';
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
				e.d(s, ['Z', 0, i]);
			},
			'../../node_modules/memoizerific sync recursive'(d) {
				function s(e) {
					const n = new Error("Cannot find module '" + e + "'");
					throw ((n.code = 'MODULE_NOT_FOUND'), n);
				}
				(s.keys = () => []), (s.resolve = s), (s.id = '../../node_modules/memoizerific sync recursive'), (d.exports = s);
			},
		},
	]);
})();
