(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9263],
		{
			'./components/src/components/Molecules/Rating/Rating.stories.tsx'(u, s, e) {
				'use strict';
				e.r(s), e.d(s, { Default: () => m, Hearts: () => d, StarsWithCount: () => l, __namedExportsOrder: () => f, default: () => y });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					o = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					c = e('./components/src/utilities/storybook.tsx'),
					r = e('./components/src/utilities/componentArgs.ts');
				const i =
					'# Rating\n\nRenders a component for a product rating. By default it supports partial star icons (eg. 4.5 / 50% width). The component will render only when the `value` prop is above zero - unless a `count` prop greater than zero is provided or the `alwaysRender` prop is used.\n\n## Sub-components\n- Icon\n\n## Usage\n\n### value\nThe `value` prop is required and expects a number between 0 and 5.\n\n```jsx\n<Rating value={4.4} />\n```\n\n### count\nThe `count` prop specifies the number of ratings for the product, this number will show after the rating icons.\n\n```jsx\n<Rating value={5} count={70} />\n```\n\n### text\nAn optional `text` prop specifies any additional text to display next to the rating icons (shows after the count if used)\n\n```jsx\n<Rating value={5} text="Product Rating" />\n```\n\n### alwaysRender\nThe `alwaysRender` prop will allow a product with no rating, or a zero rating to render.\n\n```jsx\n<Rating value={0} alwaysRender />\n```\n\n### disablePartialFill\nThe `disablePartialFill` prop will specify wether or not to show a partial star rating (eg. 3.3). When using this prop stars will round down. For example, a `value` of 3.3 would display as 3, and a `value` of 4.9 would round down to 4.\n\n```jsx\n<Rating value={3.3} disablePartialFill />\n```\n\n### fullIcon\nThe `fullIcon` prop specifies a path within the `Icon` component to use for the "full icons". The default value is `star`.\n\n```jsx\n<Rating value={4} fullIcon="heart" />\n```\n\n### emptyIcon\nThe `emptyIcon` prop specifies a path within the `Icon` component to use for the "full icons". The default value is `star-o`.\n\n```jsx\n<Rating value={4} emptyIcon="heart-o" />\n```';
				var a = e('./components/src/components/Molecules/Rating/Rating.tsx'),
					g = e('./components/src/components/Atoms/Icon/paths.tsx');
				const y = {
						title: 'Molecules/Rating',
						component: a.G,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(o.oz, { options: { overrides: { code: c.Z } }, children: i }), (0, t.Y)(o.uY, { story: o.h1 })],
									}),
							},
						},
						argTypes: {
							value: {
								description: 'The rating value (out of five)',
								type: { required: !0 },
								table: { category: 'Templates Legal', type: { summary: 'number' } },
								control: { type: 'number' },
							},
							count: {
								description: 'The number of ratings or reviews',
								type: { required: !1 },
								table: { category: 'Templates Legal', type: { summary: 'number' } },
								control: { type: 'number' },
							},
							text: {
								type: { required: !1 },
								description: 'Additional text to be rendered.',
								table: { category: 'Templates Legal', type: { summary: 'string' } },
								control: { type: 'text' },
							},
							alwaysRender: {
								description: 'Force to render even when value is 0 or undefined',
								type: { required: !1 },
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: 'boolean',
							},
							disablePartialFill: {
								description: 'Disables fractional stars - will round down',
								type: { required: !1 },
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: 'boolean',
							},
							fullIcon: {
								description: 'Icon to render in for a full star',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'star' } },
								options: [...Object.keys(g.c)],
								control: { type: 'select' },
							},
							emptyIcon: {
								description: 'Icon to render for an empty star',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'star-o' } },
								options: [...Object.keys(g.c)],
								control: { type: 'select' },
							},
							...r.F,
						},
					},
					m = (p) => (0, t.Y)(a.G, { ...p });
				m.args = { value: 4.5 };
				const l = (p) => (0, t.Y)(a.G, { ...p });
				l.args = { value: 3, count: 33, emptyIcon: 'star' };
				const d = (p) => (0, t.Y)(a.G, { ...p });
				(d.args = { value: 3.3, fullIcon: 'heart', emptyIcon: 'heart-o' }),
					(m.parameters = {
						...m.parameters,
						docs: {
							...m.parameters?.docs,
							source: { originalSource: '(props: RatingProps) => <Rating {...props} />', ...m.parameters?.docs?.source },
						},
					}),
					(l.parameters = {
						...l.parameters,
						docs: {
							...l.parameters?.docs,
							source: { originalSource: '(props: RatingProps) => <Rating {...props} />', ...l.parameters?.docs?.source },
						},
					}),
					(d.parameters = {
						...d.parameters,
						docs: {
							...d.parameters?.docs,
							source: { originalSource: '(props: RatingProps) => <Rating {...props} />', ...d.parameters?.docs?.source },
						},
					});
				const f = ['Default', 'StarsWithCount', 'Hearts'];
			},
			'./components/src/components/Molecules/Rating/Rating.tsx'(u, s, e) {
				'use strict';
				e.d(s, { G: () => w });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					o = e('../../node_modules/mobx-react-lite/es/index.js'),
					c = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/classnames/index.js'),
					i = e.n(r),
					a = e('./components/src/providers/cache.tsx'),
					g = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					y = e('./components/src/providers/snap.tsx'),
					m = e('./components/src/providers/treePath.tsx'),
					l = e('./components/src/utilities/defined.ts'),
					d = e('./components/src/utilities/mergeProps.ts'),
					f = e('./components/src/utilities/mergeStyles.ts'),
					p = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					j = e('./components/src/hooks/useComponent.tsx');
				const C = () =>
						(0, c.AH)({
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							'& .ss__rating__icons': { position: 'relative' },
							'& .ss__rating__stars': {
								width: '100%',
								display: 'inline-grid',
								gridTemplateColumns: '20% 20% 20% 20% 20%',
								'&.ss__rating__stars--full': { position: 'absolute', top: 0, left: 0 },
								'&.ss__rating__stars--empty': { position: 'relative' },
							},
							'& .ss__rating__stars__star': { overflow: 'hidden' },
							'& .ss__icon': { maxWidth: 'max-content' },
						}),
					w = (0, o.PA)((A) => {
						const L = (0, g.u)(),
							W = (0, y.uk)(),
							U = { fullIcon: 'star', emptyIcon: 'star-o', treePath: (0, m.LU)() },
							_ = (0, d.v6)('rating', L, U, A),
							{
								alwaysRender: N,
								count: h,
								text: x,
								disablePartialFill: b,
								emptyIcon: v,
								fullIcon: P,
								disableStyles: R,
								className: K,
								internalClassName: Y,
								treePath: I,
								customComponent: D,
							} = _;
						if (D) {
							const E = (0, j.x)(W?.templates?.library.import.component.rating || {}, D);
							if (E) return (0, t.Y)(E, { ..._ });
						}
						const O = {
							fullIcon: { name: 'star--full', ...(0, l.s)({ disableStyles: R }), theme: _?.theme, treePath: I },
							emptyIcon: { name: 'star--empty', color: '#ccc', ...(0, l.s)({ disableStyles: R }), theme: _?.theme, treePath: I },
						};
						let n = _.value;
						isNaN(n) && (n = Number(n) || 0), n < 0 && (n = 0), n > 5 && (n = 5);
						const B = (0, f.Z)(_, C),
							T = b ? Math.floor(n) : Math.ceil(n);
						return N || n || h
							? (0, t.Y)(a._, {
									children: (0, t.FD)('div', {
										className: i()('ss__rating', K, Y),
										...B,
										children: [
											(0, t.FD)('div', {
												className: 'ss__rating__icons',
												children: [
													(0, t.Y)('div', {
														className: 'ss__rating__stars ss__rating__stars--empty',
														children: [...Array(5)].map(() =>
															(0, t.Y)('span', {
																className: 'ss__rating__stars__star ss__rating__stars__star--empty',
																children: (0, t.Y)(p.I, { ...O.emptyIcon, ...(typeof v == 'string' ? { icon: v } : v) }),
															})
														),
													}),
													(0, t.Y)('div', {
														className: 'ss__rating__stars ss__rating__stars--full',
														children: [...Array(T)].map((E, F) => {
															let M = 100;
															return (
																F + 1 == T && !b && n % 1 != 0 && (M = (n % 1 || 1) * 100),
																(0, t.Y)('span', {
																	className: 'ss__rating__stars__star ss__rating__stars__star--full',
																	style: { width: `${M}%` },
																	children: (0, t.Y)(p.I, { ...O.fullIcon, ...(typeof P == 'string' ? { icon: P } : P) }),
																})
															);
														}),
													}),
												],
											}),
											h ? (0, t.FD)('span', { className: 'ss__rating__count', children: ['(', h, ')'] }) : (0, t.Y)(t.FK, {}),
											x ? (0, t.Y)('span', { className: 'ss__rating__text', children: x }) : (0, t.Y)(t.FK, {}),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/utilities/componentArgs.ts'(u, s, e) {
				'use strict';
				e.d(s, { F: () => t });
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
			'./components/src/utilities/defined.ts'(u, s, e) {
				'use strict';
				e.d(s, { s: () => t });
				function t(o) {
					const c = {};
					return (
						Object.keys(o).map((r) => {
							o[r] !== void 0 && (c[r] = o[r]);
						}),
						c
					);
				}
			},
			'./components/src/utilities/storybook.tsx'(u, s, e) {
				'use strict';
				e.d(s, { Z: () => r });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					o = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const c = 'prism-block',
					r = (i) => {
						const a = (0, o.li)(null);
						return (
							(0, o.vJ)(() => {
								a.current && i.className?.includes('lang-') && !i.className?.includes(c) && window?.Prism?.highlightElement(a.current);
							}, [i.className, i.children, a]),
							(0, t.Y)('code', { ...i, ref: a, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(u) {
				function s(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(s.keys = () => []), (s.resolve = s), (s.id = '../../node_modules/memoizerific sync recursive'), (u.exports = s);
			},
		},
	]);
})();
