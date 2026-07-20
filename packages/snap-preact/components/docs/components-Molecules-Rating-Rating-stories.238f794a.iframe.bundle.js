(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9263],
		{
			'./components/src/components/Molecules/Rating/Rating.stories.tsx'(p, s, e) {
				'use strict';
				e.r(s), e.d(s, { Default: () => i, Hearts: () => d, StarsWithCount: () => m, __namedExportsOrder: () => y, default: () => f });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					o = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					c = e('./components/src/utilities/storybook.tsx'),
					r = e('./components/src/utilities/componentArgs.ts');
				const l =
					'# Rating\n\nRenders a component for a product rating. By default it supports partial star icons (eg. 4.5 / 50% width). The component will render only when the `value` prop is above zero - unless a `count` prop greater than zero is provided or the `alwaysRender` prop is used.\n\n## Sub-components\n- Icon\n\n## Usage\n\n### value\nThe `value` prop is required and expects a number between 0 and 5.\n\n```tsx\n<Rating value={4.4} />\n```\n\n### count\nThe `count` prop specifies the number of ratings for the product, this number will show after the rating icons.\n\n```tsx\n<Rating value={5} count={70} />\n```\n\n### text\nAn optional `text` prop specifies any additional text to display next to the rating icons (shows after the count if used)\n\n```tsx\n<Rating value={5} text="Product Rating" />\n```\n\n### alwaysRender\nThe `alwaysRender` prop will allow a product with no rating, or a zero rating to render.\n\n```tsx\n<Rating value={0} alwaysRender />\n```\n\n### disablePartialFill\nThe `disablePartialFill` prop will specify wether or not to show a partial star rating (eg. 3.3). When using this prop stars will round down. For example, a `value` of 3.3 would display as 3, and a `value` of 4.9 would round down to 4.\n\n```tsx\n<Rating value={3.3} disablePartialFill />\n```\n\n### fullIcon\nThe `fullIcon` prop specifies a path within the `Icon` component to use for the "full icons". The default value is `star`.\n\n```tsx\n<Rating value={4} fullIcon="heart" />\n```\n\n### emptyIcon\nThe `emptyIcon` prop specifies a path within the `Icon` component to use for the "full icons". The default value is `star-o`.\n\n```tsx\n<Rating value={4} emptyIcon="heart-o" />\n```';
				var a = e('./components/src/components/Molecules/Rating/Rating.tsx'),
					g = e('./components/src/components/Atoms/Icon/paths.tsx');
				const f = {
						title: 'Molecules/Rating',
						component: a.G,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(o.oz, { options: { overrides: { code: c.Z } }, children: l }), (0, t.Y)(o.uY, { story: o.h1 })],
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
					i = (u) => (0, t.Y)(a.G, { ...u });
				i.args = { value: 4.5 };
				const m = (u) => (0, t.Y)(a.G, { ...u });
				m.args = { value: 3, count: 33, emptyIcon: 'star' };
				const d = (u) => (0, t.Y)(a.G, { ...u });
				(d.args = { value: 3.3, fullIcon: 'heart', emptyIcon: 'heart-o' }),
					(i.parameters = {
						...i.parameters,
						docs: {
							...i.parameters?.docs,
							source: { originalSource: '(props: RatingProps) => <Rating {...props} />', ...i.parameters?.docs?.source },
						},
					}),
					(m.parameters = {
						...m.parameters,
						docs: {
							...m.parameters?.docs,
							source: { originalSource: '(props: RatingProps) => <Rating {...props} />', ...m.parameters?.docs?.source },
						},
					}),
					(d.parameters = {
						...d.parameters,
						docs: {
							...d.parameters?.docs,
							source: { originalSource: '(props: RatingProps) => <Rating {...props} />', ...d.parameters?.docs?.source },
						},
					});
				const y = ['Default', 'StarsWithCount', 'Hearts'];
			},
			'./components/src/components/Molecules/Rating/Rating.tsx'(p, s, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					o = e('../../node_modules/mobx-react-lite/es/index.js'),
					c = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/classnames/index.js'),
					l = e.n(r),
					a = e('./components/src/providers/cache.tsx'),
					g = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = e('./components/src/providers/treePath.tsx'),
					i = e('./components/src/utilities/defined.ts'),
					m = e('./components/src/utilities/mergeProps.ts'),
					d = e('./components/src/utilities/mergeStyles.ts'),
					y = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					u = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const T = () =>
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
					M = (0, o.PA)((C) => {
						const w = (0, g.u)(),
							A = { fullIcon: 'star', emptyIcon: 'star-o', treePath: (0, f.LU)() },
							_ = (0, m.v6)('rating', w, A, C),
							{
								alwaysRender: j,
								count: h,
								text: E,
								disablePartialFill: x,
								emptyIcon: v,
								fullIcon: P,
								disableStyles: b,
								className: L,
								internalClassName: W,
								treePath: R,
							} = _,
							{ overrideElement: N, shouldRenderDefault: U } = (0, u._)('rating', _);
						if (!U) return N;
						const I = {
							fullIcon: { name: 'star--full', ...(0, i.s)({ disableStyles: b }), theme: _?.theme, treePath: R },
							emptyIcon: { name: 'star--empty', color: '#ccc', ...(0, i.s)({ disableStyles: b }), theme: _?.theme, treePath: R },
						};
						let n = _.value;
						isNaN(n) && (n = Number(n) || 0), n < 0 && (n = 0), n > 5 && (n = 5);
						const K = (0, d.Z)(_, T),
							D = x ? Math.floor(n) : Math.ceil(n);
						return j || n || h
							? (0, t.Y)(a._, {
									children: (0, t.FD)('div', {
										className: l()('ss__rating', L, W),
										...K,
										children: [
											(0, t.FD)('div', {
												className: 'ss__rating__icons',
												children: [
													(0, t.Y)('div', {
														className: 'ss__rating__stars ss__rating__stars--empty',
														children: [...Array(5)].map(() =>
															(0, t.Y)('span', {
																className: 'ss__rating__stars__star ss__rating__stars__star--empty',
																children: (0, t.Y)(y.I, { ...I.emptyIcon, ...(typeof v == 'string' ? { icon: v } : v) }),
															})
														),
													}),
													(0, t.Y)('div', {
														className: 'ss__rating__stars ss__rating__stars--full',
														children: [...Array(D)].map((F, Y) => {
															let O = 100;
															return (
																Y + 1 == D && !x && n % 1 != 0 && (O = (n % 1 || 1) * 100),
																(0, t.Y)('span', {
																	className: 'ss__rating__stars__star ss__rating__stars__star--full',
																	style: { width: `${O}%` },
																	children: (0, t.Y)(y.I, { ...I.fullIcon, ...(typeof P == 'string' ? { icon: P } : P) }),
																})
															);
														}),
													}),
												],
											}),
											h ? (0, t.FD)('span', { className: 'ss__rating__count', children: ['(', h, ')'] }) : (0, t.Y)(t.FK, {}),
											E ? (0, t.Y)('span', { className: 'ss__rating__text', children: E }) : (0, t.Y)(t.FK, {}),
										],
									}),
							  })
							: null;
					});
				e.d(s, ['G', 0, M]);
			},
			'./components/src/utilities/componentArgs.ts'(p, s, e) {
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
			'./components/src/utilities/defined.ts'(p, s, e) {
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
			'./components/src/utilities/storybook.tsx'(p, s, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					o = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const c = 'prism-block',
					r = (l) => {
						const a = (0, o.li)(null);
						return (
							(0, o.vJ)(() => {
								a.current && l.className?.includes('lang-') && !l.className?.includes(c) && window?.Prism?.highlightElement(a.current);
							}, [l.className, l.children, a]),
							(0, t.Y)('code', { ...l, ref: a, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(s, ['Z', 0, r]);
			},
			'../../node_modules/memoizerific sync recursive'(p) {
				function s(e) {
					const t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(s.keys = () => []), (s.resolve = s), (s.id = '../../node_modules/memoizerific sync recursive'), (p.exports = s);
			},
		},
	]);
})();
