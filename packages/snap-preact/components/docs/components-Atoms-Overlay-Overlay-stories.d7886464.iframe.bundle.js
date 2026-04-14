(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[8982],
		{
			'./components/src/components/Atoms/Overlay/Overlay.stories.tsx'(d, n, e) {
				'use strict';
				e.r(n), e.d(n, { Default: () => l, __namedExportsOrder: () => m, default: () => y });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					r = e('./components/src/components/Atoms/Overlay/Overlay.tsx'),
					i = e('./components/src/utilities/storybook.tsx'),
					a = e('./components/src/utilities/componentArgs.ts');
				const o =
						"# Overlay\n\nRenders an Overlay. Typically used to blur the background with a foreground element such as a modal or slideout menu.\n\n## Usage\n```jsx\nimport { Overlay } from '@athoscommerce/snap-preact/components';\n```\n\n### active\nThe required `active` prop specifies when to render the component.\n\n```jsx\n<Overlay active={true} />\n```\n\n### color\nThe `color` prop specifies the color of the overlay.\n\n```jsx\n<Overlay active={true} color={'rgba(0,0,0,0.8)'} />\n```\n\n### transitionSpeed\nThe `transitionSpeed` prop specifies animation transition speed.\n\n```jsx\n<Overlay active={true} transitionSpeed='0.5s' />\n```\n\n### Events\n\n#### onClick\nThe `onClick` prop allows for a custom callback function.\n\n```jsx\n<Overlay active={true} onClick={(e)=>{console.log(e)}} />\n```\n",
					y = {
						title: 'Atoms/Overlay',
						component: r.h,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, s.FD)('div', {
										children: [(0, s.Y)(c.oz, { options: { overrides: { code: i.Z } }, children: o }), (0, s.Y)(c.uY, { story: c.h1 })],
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
					l = (u) => (0, s.Y)(r.h, { ...u });
				(l.args = { active: !0 }),
					(l.parameters = {
						...l.parameters,
						docs: {
							...l.parameters?.docs,
							source: { originalSource: '(args: OverlayProps) => <Overlay {...args} />', ...l.parameters?.docs?.source },
						},
					});
				const m = ['Default'];
			},
			'./components/src/components/Atoms/Overlay/Overlay.tsx'(d, n, e) {
				'use strict';
				e.d(n, { h: () => E });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/classnames/index.js'),
					i = e.n(r),
					a = e('./components/src/providers/cache.tsx'),
					o = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					y = e('./components/src/providers/snap.tsx'),
					l = e('./components/src/providers/treePath.tsx'),
					m = e('./components/src/utilities/mergeProps.ts'),
					u = e('./components/src/utilities/mergeStyles.ts'),
					t = e('./components/src/hooks/useComponent.tsx'),
					v = e('./components/src/hooks/useA11y.tsx');
				const _ = ({ transitionSpeed: f, color: O }) =>
					(0, c.AH)({
						transition: `background ${f} ease 0s, left 0s ease ${f}`,
						position: 'fixed',
						zIndex: '10003',
						height: '100%',
						width: '100%',
						top: '0',
						left: '-100%',
						'&.ss__overlay--active': { transition: `background ${f} ease, left 0s ease`, background: O, left: '0' },
					});
				function E(f) {
					const O = (0, o.u)(),
						D = (0, y.uk)(),
						P = { color: 'rgba(0,0,0,0.8)', transitionSpeed: '0.25s', treePath: (0, l.LU)() },
						g = (0, m.v6)('overlay', O, P, f),
						{ active: h, onClick: b, disableA11y: C, className: T, internalClassName: A, customComponent: x } = g;
					if (x) {
						const p = (0, t.x)(D?.templates?.library.import.component.overlay || {}, x);
						if (p) return (0, s.Y)(p, { ...g });
					}
					const M = (0, u.Z)(g, _);
					return (0, s.Y)(a._, {
						children: (0, s.Y)('div', {
							onClick: (p) => b && h && b(p),
							ref: (p) => (C ? null : (0, v.iy)(p, h ? 0 : -1)),
							className: i()('ss__overlay', { 'ss__overlay--active': h }, T, A),
							...M,
						}),
					});
				}
			},
			'./components/src/hooks/useA11y.tsx'(d, n, e) {
				'use strict';
				e.d(n, { DH: () => i, aZ: () => r, iy: () => a });
				const s = 9,
					c = 27,
					r = 'ss-a11y',
					i =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function a(o, y, l, m) {
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
						o.setAttribute('tabIndex', `${y || 0}`),
						o.addEventListener('keydown', (t) => {
							(t.code === 'Space' || t.code === 'Enter') && o.click();
						}),
						l &&
							o.addEventListener('keydown', function (t) {
								const v = o.querySelectorAll(i),
									_ = v[0],
									E = v[v.length - 1];
								if (t.keyCode == c) {
									o.focus(), m && m(t), t.preventDefault(), t.stopPropagation();
									return;
								}
								(t.key === 'Tab' || t.keyCode === s) &&
									(t.shiftKey
										? document.activeElement === _ && (E.focus(), t.preventDefault())
										: document.activeElement === E && (_.focus(), t.preventDefault()));
							}));
				}
			},
			'./components/src/utilities/componentArgs.ts'(d, n, e) {
				'use strict';
				e.d(n, { F: () => s });
				const s = {
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
			'./components/src/utilities/storybook.tsx'(d, n, e) {
				'use strict';
				e.d(n, { Z: () => i });
				var s = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const r = 'prism-block',
					i = (a) => {
						const o = (0, c.li)(null);
						return (
							(0, c.vJ)(() => {
								o.current && a.className?.includes('lang-') && !a.className?.includes(r) && window?.Prism?.highlightElement(o.current);
							}, [a.className, a.children, o]),
							(0, s.Y)('code', { ...a, ref: o, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(d) {
				function n(e) {
					var s = new Error("Cannot find module '" + e + "'");
					throw ((s.code = 'MODULE_NOT_FOUND'), s);
				}
				(n.keys = () => []), (n.resolve = n), (n.id = '../../node_modules/memoizerific sync recursive'), (d.exports = n);
			},
		},
	]);
})();
