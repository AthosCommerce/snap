(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[7069],
		{
			'./components/src/components/Organisms/BranchOverride/BranchOverride.stories.tsx'(f, r, o) {
				'use strict';
				o.r(r), o.d(r, { Auto: () => m, Dark: () => p, Error: () => h, Light: () => _, __namedExportsOrder: () => O, default: () => y });
				var e = o('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					s = o('../../node_modules/@storybook/blocks/dist/index.mjs'),
					n = o('./components/src/components/Organisms/BranchOverride/BranchOverride.tsx'),
					d = o('./components/src/utilities/storybook.tsx'),
					c = o('./components/src/utilities/componentArgs.ts');
				const l = `# BranchOverride

Renders a popup to show when a branch override is in place.
Executes \`onRemoveClick\` prop when the remove button is clicked.
Must have \`name\` and either \`details\` or \`error\` props to render.

## Components Used
- Icon

## Usage
\`\`\`jsx
import { BranchOverride } from '@athoscommerce/snap-preact/components';
\`\`\`

### name
The required \`name\` prop expects a string containing the name of the override branch.

\`\`\`jsx
<BranchOverride name="testing" />
\`\`\`

### details
The \`details\` prop expects an object containing strings for the \`url\` and \`lastModified\` date of the override branch bundle.

\`\`\`jsx
const details = {
	url: 'https://snapui.athoscommerce.io/y56s6x/next/bundle.js',
	lastModified: '1 Feb 2022 1:02:03 GMT'
};

<BranchOverride name="testing" details={details} />
\`\`\`

### error
The \`error\` prop expects an object containing strings for the \`message\` and \`description\` of the error.

\`\`\`jsx
const error = {
	message: 'Branch not found!',
	description: 'Incorrect branch name or branch no longer exists.'
};

<BranchOverride name="next" error={error} />
\`\`\`

### onRemoveClick
The \`onRemoveClick\` prop is a function to be called when the 'remove' button is clicked

\`\`\`jsx
const whenRemoved = (e, name) => {
	console.log(\`remove clicked in the override for the '\${name}' branch\`);
};

<BranchOverride name="testing" onRemoveClick={whenRemoved} />
\`\`\`

### darkMode
The \`darkMode\` prop is used to set the component styling to prefer (or not to prefer) dark mode. By default the component will auto detect the browser preference.

\`\`\`jsx
const details = {
	url: 'https://snapui.athoscommerce.io/y56s6x/next/bundle.js',
	lastModified: '1 Feb 2022 1:02:03 GMT'
};

<BranchOverride next="testing" details={details} darkMode={false} />
\`\`\``,
					y = {
						title: 'Organisms/BranchOverride',
						component: n.n,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, e.FD)('div', {
										children: [(0, e.Y)(s.oz, { options: { overrides: { code: d.Z } }, children: l }), (0, e.Y)(s.uY, { story: s.h1 })],
									}),
							},
						},
						decorators: [(i) => (0, e.Y)('div', { style: { maxWidth: '900px', position: 'relative' }, children: (0, e.Y)(i, {}) })],
						argTypes: {
							branch: {
								description: 'bundle branch name',
								type: { required: !0 },
								table: { type: { summary: 'string' } },
								control: { type: 'text' },
							},
							details: {
								description: 'Object containing details for branch override',
								type: { required: !1 },
								table: { type: { summary: '{ url: string; lastModified: string }' } },
								control: { type: 'object' },
							},
							error: {
								description: 'Object containing error message and description',
								type: { required: !1 },
								table: { type: { summary: '{ message: string; description: string }' } },
								control: { type: 'object' },
							},
							onRemoveClick: {
								description: 'optional function to run on remove button click',
								table: { type: { summary: '(e: Event, name: string) => void' } },
								control: { type: 'none' },
								action: 'onRemoveClick',
							},
							darkMode: {
								description: 'enable darkMode',
								type: { required: !1 },
								table: { type: { summary: 'boolean' } },
								control: { type: 'boolean' },
							},
							...c.F,
						},
					},
					m = (i) => (0, e.Y)(n.n, { ...i });
				m.args = {
					branch: 'next',
					details: { url: 'https://snapui.athoscommerce.io/y56s6x/next/bundle.js', lastModified: '1 Feb 2022 1:02:03 GMT' },
				};
				const p = (i) => (0, e.Y)(n.n, { ...i });
				p.args = {
					branch: 'next',
					details: { url: 'https://snapui.athoscommerce.io/y56s6x/next/bundle.js', lastModified: '1 Feb 2022 1:02:03 GMT' },
					darkMode: !0,
				};
				const h = (i) => (0, e.Y)(n.n, { ...i });
				h.args = { branch: 'testing', error: { message: 'Branch not found!', description: 'Incorrect branch name or branch no longer exists.' } };
				const _ = (i) => (0, e.Y)(n.n, { ...i });
				(_.args = {
					branch: 'next',
					details: { url: 'https://snapui.athoscommerce.io/y56s6x/next/bundle.js', lastModified: '1 Feb 2022 1:02:03 GMT' },
					darkMode: !1,
				}),
					(m.parameters = {
						...m.parameters,
						docs: {
							...m.parameters?.docs,
							source: { originalSource: '(args: BranchOverrideProps) => <BranchOverride {...args} />', ...m.parameters?.docs?.source },
						},
					}),
					(p.parameters = {
						...p.parameters,
						docs: {
							...p.parameters?.docs,
							source: { originalSource: '(args: BranchOverrideProps) => <BranchOverride {...args} />', ...p.parameters?.docs?.source },
						},
					}),
					(h.parameters = {
						...h.parameters,
						docs: {
							...h.parameters?.docs,
							source: { originalSource: '(args: BranchOverrideProps) => <BranchOverride {...args} />', ...h.parameters?.docs?.source },
						},
					}),
					(_.parameters = {
						..._.parameters,
						docs: {
							..._.parameters?.docs,
							source: { originalSource: '(args: BranchOverrideProps) => <BranchOverride {...args} />', ..._.parameters?.docs?.source },
						},
					});
				const O = ['Auto', 'Dark', 'Error', 'Light'];
			},
			'./components/src/components/Organisms/BranchOverride/BranchOverride.tsx'(f, r, o) {
				'use strict';
				o.d(r, { n: () => C });
				var e = o('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					s = o('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = o('../../node_modules/classnames/index.js'),
					d = o.n(n),
					c = o('../../node_modules/preact/hooks/dist/hooks.module.js'),
					l = o('./components/src/components/Atoms/Icon/Icon.tsx'),
					y = o('./components/src/utilities/defined.ts'),
					m = o('./components/src/utilities/mergeProps.ts'),
					p = o('./components/src/utilities/mergeStyles.ts'),
					h = o('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					_ = o('./components/src/providers/snap.tsx'),
					O = o('./components/src/providers/treePath.tsx'),
					i = o('./components/src/hooks/useComponent.tsx');
				const j = ({ componentTheme: t }) =>
						(0, s.AH)({
							width: '360px',
							height: '120px',
							overflow: 'hidden',
							fontSize: '14px',
							position: 'fixed',
							zIndex: '9999',
							cursor: 'auto',
							bottom: '50px',
							right: 0,
							padding: '0 5px',
							background: t.main.background,
							color: t.main.color,
							border: t.main.border,
							borderTopLeftRadius: '10px',
							borderBottomLeftRadius: '10px',
							boxShadow: t.main.boxShadow,
							transition: 'height ease 0.2s, right ease 0.5s 0.2s',
							'&.ss__branch-override--collapsed': {
								transition: 'height ease 0.5s 0.5s, right ease 0.5s',
								right: '-323px',
								height: '50px',
								cursor: 'pointer',
							},
							'.ss__branch-override__top': {
								padding: '10px 5px',
								background: t.top.background,
								borderBottom: t.top.border,
								'.ss__branch-override__top__logo': { display: 'inline-block', height: '30px', maxHeight: '30px', verticalAlign: 'middle' },
								'.ss__branch-override__top__collapse': { display: 'inline-block', float: 'right', paddingTop: '7px', cursor: 'pointer' },
								'.ss__branch-override__top__button': {
									borderRadius: '5px',
									padding: '6px',
									height: '100%',
									lineHeight: '14px',
									textAlign: 'center',
									cursor: 'pointer',
									fontSize: '10px',
									border: t.top.button.border,
									color: t.top.button.color,
									float: 'right',
									marginRight: '14px',
								},
							},
							'.ss__branch-override__bottom': {
								padding: '10px 15px',
								fontSize: '12px',
								'.ss__branch-override__bottom__left': {
									fontWeight: 'bold',
									fontStyle: t.bottom.branch.style,
									color: t.bottom.branch.color,
									fontSize: '14px',
									lineHeight: '20px',
									display: 'inline-flex',
									alignItems: 'center',
									maxWidth: '180px',
									whiteSpace: 'nowrap',
									overflow: 'hidden',
									textOverflow: 'ellipsis',
									svg: { marginRight: '10px' },
								},
								'.ss__branch-override__bottom__right': {
									float: 'right',
									fontStyle: 'italic',
									color: t.bottom.additional.color,
									fontSize: '12px',
									lineHeight: '20px',
								},
								'.ss__branch-override__bottom__content': { marginTop: '10px' },
							},
						}),
					u = {
						darkTheme: {
							class: 'ss__branch-override--dark',
							main: { border: '0', background: 'rgba(26, 29, 36, 0.9)', color: '#fff', boxShadow: '' },
							top: {
								border: '1px solid #454c5f',
								logo: { src: 'https://cdn.athoscommerce.net/snap/images/athos-logo-white.svg' },
								button: { border: '1px solid #fff', color: '#fff', content: 'STOP PREVIEW' },
								close: { fill: '#fff' },
							},
							bottom: {
								content: 'Preview functionality may differ from production.',
								branch: { color: '#fff', style: 'italic' },
								additional: { color: '#fff' },
							},
						},
						lightTheme: {
							class: 'ss__branch-override--light',
							main: { border: '0', background: 'rgba(29, 73, 144, 0.9)', color: '#fff', boxShadow: '' },
							top: {
								border: '1px solid #3c78d7',
								logo: { src: 'https://cdn.athoscommerce.net/snap/images/athos-logo-white.svg' },
								button: { border: '1px solid #fff', color: '#fff', content: 'STOP PREVIEW' },
								close: { fill: '#fff' },
							},
							bottom: {
								content: 'Preview functionality may differ from production.',
								branch: { color: '#fff', style: 'italic' },
								additional: { color: '#fff' },
							},
						},
						failureTheme: {
							class: 'ss__branch-override--error',
							main: { border: '0', background: 'rgba(130, 6, 6, 0.9)', color: '#fff', boxShadow: '' },
							top: {
								border: '1px solid #e50b0b',
								logo: { src: 'https://cdn.athoscommerce.net/snap/images/athos-logo-white.svg' },
								button: { border: '1px solid #fff', color: '#fff', content: 'REMOVE' },
								close: { fill: '#fff' },
							},
							bottom: {
								content: 'Incorrect branch name or branch no longer exists.',
								branch: { color: '#fff', style: 'italic' },
								additional: { color: '#fff' },
							},
						},
					},
					C = (t) => {
						const T = (0, h.u)(),
							R = (0, _.uk)(),
							I = { treePath: (0, O.LU)() },
							v = (0, m.v6)('branchOverride', T, I, t),
							{
								branch: x,
								details: E,
								error: g,
								className: A,
								internalClassName: w,
								darkMode: P,
								disableStyles: S,
								onRemoveClick: M,
								treePath: L,
								customComponent: B,
							} = v;
						if (B) {
							const a = (0, i.x)(R?.templates?.library.import.component.branchOverride || {}, B);
							if (a) return (0, e.Y)(a, { ...v });
						}
						const D = {
								icon: {
									internalClassName: 'ss__branch-override__bottom__left__icon',
									size: '12px',
									...(0, y.s)({ disableStyles: S }),
									theme: v?.theme,
									treePath: L,
								},
							},
							N = typeof P == 'boolean' ? P : window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)').matches : !1,
							[b, U] = (0, c.J0)(N ? 'darkTheme' : 'lightTheme'),
							[W, k] = (0, c.J0)(0);
						g && U('failureTheme');
						const Y = (0, p.Z)({ ...v, componentTheme: u[b] }, j);
						return (E || g) && x
							? (0, e.FD)('div', {
									className: d()('ss__branch-override', u[b].class, { 'ss__branch-override--collapsed': W }, A, w),
									...Y,
									onClick: (a) => {
										a.preventDefault(), a.stopPropagation(), k(0);
									},
									children: [
										(0, e.FD)('div', {
											className: 'ss__branch-override__top',
											children: [
												(0, e.Y)('img', { className: 'ss__branch-override__top__logo', src: u[b].top.logo.src }),
												(0, e.Y)('div', {
													className: 'ss__branch-override__top__collapse',
													onClick: (a) => {
														a.preventDefault(), a.stopPropagation(), k(1);
													},
													children: (0, e.Y)(l.I, { size: '18px', color: u[b].top.close.fill, ...D.icon, icon: 'close-thin' }),
												}),
												(0, e.Y)('div', {
													className: 'ss__branch-override__top__button',
													onClick: (a) => {
														a.preventDefault(), a.stopPropagation(), M && M(a, x);
													},
													children: u[b].top.button.content,
												}),
											],
										}),
										(0, e.FD)('div', {
											className: 'ss__branch-override__bottom',
											children: [
												(0, e.Y)('span', {
													className: 'ss__branch-override__bottom__left',
													children: g
														? (0, e.FD)(e.FK, {
																children: [
																	(0, e.Y)(l.I, { size: '12px', color: u[b].bottom.branch.color, ...D.icon, icon: 'warn' }),
																	(0, e.Y)('span', { children: g.message }),
																],
														  })
														: x,
												}),
												(0, e.Y)('span', { className: 'ss__branch-override__bottom__right', children: g ? x : E?.lastModified }),
												(0, e.Y)('div', { className: 'ss__branch-override__bottom__content', children: g?.description || u[b].bottom.content }),
											],
										}),
									],
							  })
							: null;
					};
			},
			'./components/src/utilities/componentArgs.ts'(f, r, o) {
				'use strict';
				o.d(r, { F: () => e });
				const e = {
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
			'./components/src/utilities/defined.ts'(f, r, o) {
				'use strict';
				o.d(r, { s: () => e });
				function e(s) {
					const n = {};
					return (
						Object.keys(s).map((d) => {
							s[d] !== void 0 && (n[d] = s[d]);
						}),
						n
					);
				}
			},
			'./components/src/utilities/storybook.tsx'(f, r, o) {
				'use strict';
				o.d(r, { Z: () => d });
				var e = o('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					s = o('../../node_modules/preact/hooks/dist/hooks.module.js');
				const n = 'prism-block',
					d = (c) => {
						const l = (0, s.li)(null);
						return (
							(0, s.vJ)(() => {
								l.current && c.className?.includes('lang-') && !c.className?.includes(n) && window?.Prism?.highlightElement(l.current);
							}, [c.className, c.children, l]),
							(0, e.Y)('code', { ...c, ref: l, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(f) {
				function r(o) {
					var e = new Error("Cannot find module '" + o + "'");
					throw ((e.code = 'MODULE_NOT_FOUND'), e);
				}
				(r.keys = () => []), (r.resolve = r), (r.id = '../../node_modules/memoizerific sync recursive'), (f.exports = r);
			},
		},
	]);
})();
