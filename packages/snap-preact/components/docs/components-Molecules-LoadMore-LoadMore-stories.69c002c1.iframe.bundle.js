(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9983],
		{
			'./components/src/components/Molecules/LoadMore/LoadMore.stories.tsx'(P, l, e) {
				'use strict';
				e.r(l), e.d(l, { Default: () => s, __namedExportsOrder: () => M, default: () => h });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					n = e('./components/src/components/Molecules/LoadMore/LoadMore.tsx'),
					d = e('./components/src/utilities/storybook.tsx'),
					r = e('./components/src/utilities/componentArgs.ts'),
					t = e('./components/src/components/Atoms/Icon/paths.tsx'),
					a = e('./components/src/utilities/snapify.ts');
				const E =
						"# LoadMore\n\nRenders a \"Load More\" button that displays the next page of results. Recommended to be used with SearchController's `infinite` config\n\n## Sub-components\n- Button\n\n## Usage\n\n### pagination / controller\nThe required `pagination` (or `controller`) prop specifies a reference to the pagination store object.\n\n```jsx\n<LoadMore pagination={controller.store.pagination} />\n```\n\n```jsx\n<LoadMore controller={controller} />\n```\n\n### autoFetch\nThe `autoFetch` prop will not render a \"Show More\" button and instead fetch the next page of results when the component appears in the viewport. Recommended to place underneath Results to allow for infinite scrolling. \n\n```jsx\n<LoadMore pagination={controller.store.pagination} autoFetch={true} />\n```\n\nCan be used in combination with `hideProgressIndicator` and `hideProgressText` to not display anything and have infinite scrolling still function:\n\n```jsx\n<LoadMore pagination={controller.store.pagination} autoFetch={true} hideProgressIndicator={true} hideProgressText={true} />\n```\n\n### intersectionOffset + autoFetch\nRequires `autoFetch` prop to be `true`. The `intersectionOffset` prop defines the IntersectionObserver's `rootMargin` value. This is an offset added to each side of the component's bounding box to create the final root bounds. These bounds then determine when the component is in the viewport and the next results are fetched. Default: `0px`\n\n```jsx\n<LoadMore pagination={controller.store.pagination} autoFetch={true} intersectionOffset={'40px'} />\n```\n\n### loading\nThe `loading` prop is not required if the `controller` prop is provided.\n\nIf the `pagination` prop is used, the `loading` prop should contain a value from `controller.store.loading` to allow for the \"Load More\" button to be disabled and the spinner icon visible while fetching results.\n\n```jsx\n<LoadMore pagination={controller.store.pagination} loading={controller.store.loading} />\n```\n\n### loadMoreText\nThe `loadMoreText` prop sets the button text. Default value: \"Load More\"\n\n```jsx\n<LoadMore pagination={controller.store.pagination} loadMoreText={'Load More'} />\n```\n\n### color\nThe `color` prop specifies the color of the indicator active state.\n\n```jsx\n<LoadMore pagination={controller.store.pagination} color={'#ffff00'} />\n```\n\n### backgroundColor\nThe `backgroundColor` prop specifies the background color of the indicator.\n\n```jsx\n<LoadMore pagination={controller.store.pagination} backgroundColor={'#eeeeee'} />\n```\n\n### progressIndicatorWidth\nThe `progressIndicatorWidth` prop sets the progress indicator width. Recommended units: `px`, `rem`, `em`, `vw`.\n\n```jsx\n<LoadMore pagination={controller.store.pagination} progressIndicatorWidth={'300px'} />\n```\n\n### progressIndicatorSize\nThe `progressIndicatorSize` prop sets the progress indicator size. Recommended units: `px`, `rem`, `em`, `vw`. Unsupported unit: `%` not recommended. \n\n```jsx\n<LoadMore pagination={controller.store.pagination} progressIndicatorSize={'5px'} />\n```\n\n### hideProgressIndicator\nThe `hideProgressIndicator` prop hides the progress indicator.\n\n```jsx\n<LoadMore pagination={controller.store.pagination} hideProgressIndicator={true} />\n```\n\n### hideProgressText\nThe `hideProgressText` prop hides the progress text.\n\n```jsx\n<LoadMore pagination={controller.store.pagination} hideProgressText={true} />\n```\n\n### hideProgressIndicator + hideProgressText\nWhen both `hideProgressIndicator` and `hideProgressText` props are `true` only the button will be displayed.\n\n```jsx\n<LoadMore pagination={controller.store.pagination} hideProgressIndicator={true} hideProgressText={true} />\n```\n\n### loadingIcon\nThe `loadingIcon` prop defines the icon used when loading. Default: `spinner`\n\n```jsx\n<LoadMore pagination={controller.store.pagination} loadingIcon={'spinner'} />\n```\n\n### loadingLocation\nThe `loadingLocation` prop defines the location of the loading icon. Default: `button` will be displayed within the \"Load More\" button. Alternative value of `outside` will display the loading icon in place of the button.\n\n### onClick\nThe `onClick` prop allows for a custom callback function for when the button is clicked.\n\n```jsx\n<LoadMore pagination={controller.store.pagination} onClick={(e)=>{console.log(e)}} />\n```\n",
					h = {
						title: 'Molecules/LoadMore',
						component: n.e,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, o.FD)('div', {
										children: [(0, o.Y)(i.oz, { options: { overrides: { code: d.Z } }, children: E }), (0, o.Y)(i.uY, { story: i.h1 })],
									}),
							},
						},
						argTypes: {
							controller: {
								description: 'Search Controller reference',
								table: { type: { summary: 'Search controller object' } },
								control: { type: 'none' },
							},
							pagination: {
								description: 'Pagination store reference',
								table: { type: { summary: 'pagination store object' } },
								control: { type: 'none' },
							},
							autoFetch: {
								description: 'Automatically load more results when component comes into viewport',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							intersectionOffset: {
								defaultValue: '0px',
								description: 'Defines the IntersectionObserver rootMargin',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '0px' } },
								control: { type: 'text' },
							},
							loading: {
								description: 'Loading state',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							loadMoreText: {
								defaultValue: 'Load More',
								description: 'Load more button text',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'Load More' } },
								control: { type: 'text' },
							},
							color: {
								description: 'Color of the indicator active state',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '#cccccc' } },
								control: { type: 'color' },
							},
							backgroundColor: {
								description: 'Background color of the indicator',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '#f8f8f8' } },
								control: { type: 'color' },
							},
							progressIndicatorWidth: {
								description: 'Progress indicator width in pixels',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '300px' } },
								control: { type: 'text' },
							},
							progressIndicatorSize: {
								description: 'Progress indicator size in pixels',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '5px' } },
								control: { type: 'text' },
							},
							hideProgressIndicator: {
								description: 'Hide progress indicator',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideProgressText: {
								description: 'Hide progress text',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							loadingIcon: {
								description: 'Loading icon',
								defaultValue: 'spinner',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'spinner' } },
								options: [...Object.keys(t.c)],
								control: { type: 'select' },
							},
							loadingLocation: {
								description: 'Location of loading indicator',
								defaultValue: 'button',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'button' } },
								options: ['button', 'outside'],
								control: { type: 'select' },
							},
							onClick: {
								description: 'Button click event handler',
								table: { category: 'Templates Legal', type: { summary: 'function(e: Event)' } },
								control: { type: 'none' },
								action: 'onClick',
							},
							...r.F,
						},
					},
					b = a.p.search({
						id: 'LoadMore',
						globals: { siteId: 'atkzs2', filters: [{ type: 'value', field: 'color_family', value: 'Beige', background: !0 }] },
					}),
					s = (y, { loaded: { controller: x } }) => (0, o.Y)(n.e, { ...y, controller: x });
				(s.loaders = [async () => (await b.search(), { controller: b })]),
					(s.parameters = {
						...s.parameters,
						docs: {
							...s.parameters?.docs,
							source: {
								originalSource: `(args: LoadMoreProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <LoadMore {...args} controller={controller} />;
}`,
								...s.parameters?.docs?.source,
							},
						},
					});
				const M = ['Default'];
			},
			'./components/src/components/Atoms/Button/Button.tsx'(P, l, e) {
				'use strict';
				e.d(l, { $: () => p });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = e('../../node_modules/classnames/index.js'),
					d = e.n(n),
					r = e('../../node_modules/mobx-react-lite/es/index.js'),
					t = e('./components/src/providers/cache.tsx'),
					a = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					E = e('./components/src/providers/snap.tsx'),
					h = e('./components/src/providers/treePath.tsx'),
					b = e('./components/src/hooks/useA11y.tsx'),
					s = e('./components/src/utilities/cloneWithProps.tsx'),
					M = e('./components/src/utilities/defined.ts'),
					y = e('./components/src/utilities/mergeProps.ts'),
					x = e('./components/src/utilities/mergeStyles.ts'),
					A = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					v = e('./components/src/hooks/useLang.tsx'),
					j = e('./components/src/hooks/useComponent.tsx'),
					V = e('../../node_modules/deepmerge/dist/cjs.js'),
					w = e.n(V),
					W = e('../../node_modules/color/index.js'),
					k = e.n(W);
				const m = ({ native: u, color: _, backgroundColor: c, borderColor: O, theme: I }) => {
						const g = new (k())(c || _ || I?.variables?.colors?.primary || void 0).lightness(95);
						return u
							? (0, i.AH)({})
							: (0, i.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: _ || I?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: c || '#fff',
									border: `1px solid ${O || _ || I?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer', backgroundColor: g.hex() || '#f8f8f8' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  });
					},
					p = (0, r.PA)((u) => {
						const _ = (0, a.u)(),
							c = (0, E.uk)(),
							I = { disableA11y: !1, treePath: (0, h.LU)() },
							g = (0, y.v6)('button', _, I, u),
							{
								content: S,
								children: B,
								disabled: U,
								native: F,
								onClick: $,
								disableA11y: z,
								disableStyles: J,
								className: H,
								internalClassName: Z,
								icon: f,
								lang: L,
								treePath: R,
								customComponent: X,
								style: oe,
								styleScript: Q,
								themeStyleScript: q,
								...D
							} = g;
						if (X) {
							const T = (0, j.x)(c?.templates?.library.import.component.button || {}, X);
							if (T) return (0, o.Y)(T, { ...g });
						}
						const C = { icon: { internalClassName: 'ss__button__icon', ...(0, M.s)({ disableStyles: J }), theme: g?.theme, treePath: R } },
							Y = {
								...(0, x.Z)(g, m),
								className: d()('ss__button', { 'ss__button--native': F, 'ss__button--disabled': U }, H, Z),
								disabled: U,
								onClick: (T) => !U && $ && $(T),
								...D,
							},
							ee = { ref: (T) => (0, b.iy)(T) },
							G = {},
							te = w()(G, L || {}),
							N = (0, v.u)(te, {});
						return S || B || f || L?.button?.value
							? (0, o.Y)(t._, {
									children: F
										? (0, o.FD)('button', {
												...Y,
												children: [
													(0, o.FD)('span', {
														className: 'ss__button__content',
														...N.button?.all,
														children: [(0, s.Y)(S, { treePath: R }), (0, s.Y)(B, { treePath: R })],
													}),
													f && (0, o.Y)(A.I, { ...C.icon, ...(typeof f == 'string' ? { icon: f } : f) }),
												],
										  })
										: (0, o.FD)('div', {
												...(z ? {} : ee),
												role: 'button',
												'aria-disabled': U,
												...Y,
												...N.button?.attributes,
												children: [
													S || B || N.button?.value
														? (0, o.FD)('span', {
																className: 'ss__button__content',
																...N.button?.value,
																children: [(0, s.Y)(S, { treePath: R }), (0, s.Y)(B, { treePath: R })],
														  })
														: void 0,
													f && (0, o.Y)(A.I, { ...C.icon, ...(typeof f == 'string' ? { icon: f } : f) }),
												],
										  }),
							  })
							: null;
					});
			},
			'./components/src/components/Molecules/LoadMore/LoadMore.tsx'(P, l, e) {
				'use strict';
				e.d(l, { e: () => p });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					n = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					d = e('../../node_modules/classnames/index.js'),
					r = e.n(d),
					t = e('../../node_modules/mobx-react-lite/es/index.js'),
					a = e('../../node_modules/deepmerge/dist/cjs.js'),
					E = e.n(a),
					h = e('./components/src/providers/cache.tsx'),
					b = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					s = e('./components/src/providers/snap.tsx'),
					M = e('./components/src/providers/treePath.tsx'),
					y = e('./components/src/utilities/defined.ts'),
					x = e('./components/src/utilities/mergeProps.ts'),
					A = e('./components/src/utilities/mergeStyles.ts'),
					v = e('./components/src/hooks/useIntersection.tsx'),
					j = e('./components/src/hooks/useLang.tsx'),
					V = e('./components/src/hooks/useComponent.tsx'),
					w = e('./components/src/components/Atoms/Button/Button.tsx'),
					W = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					k = e('./components/src/hooks/useFuncDebounce.tsx');
				const m = ({ pagination: u, progressIndicatorWidth: _, progressIndicatorSize: c, color: O, backgroundColor: I, theme: g }) =>
						(0, n.AH)({
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							gap: '20px',
							'& .ss__load-more__button--disabled': { opacity: 0.7, pointerEvents: 'none', '&:hover': { cursor: 'default' } },
							'& .ss__load-more__button--hidden': { display: 'none' },
							'& .ss__button': { alignItems: 'center' },
							'& .ss__load-more__icon': {
								marginLeft: '5px',
								animation: `${(0, n.i7)({ '0%': { transform: 'rotate(0deg)' }, '100%': { transform: 'rotate(360deg)' } })} linear 1s infinite`,
							},
							'&.ss__load-more': {
								'& .ss__load-more__progress': {
									display: 'flex',
									flexDirection: 'column',
									gap: '5px',
									'& .ss__load-more__progress__indicator': {
										width: _,
										background: I || g?.variables?.colors?.secondary || '#f8f8f8',
										borderRadius: c,
										'& .ss__load-more__progress__indicator__bar': {
											width: u ? `${(u.end / u.totalResults) * 100}%` : '',
											background: O || g?.variables?.colors?.primary || '#ccc',
											borderRadius: c,
											height: c,
										},
									},
									'& .ss__load-more__progress__text': { textAlign: 'center' },
								},
							},
						}),
					p = (0, t.PA)((u) => {
						const _ = (0, b.u)(),
							c = (0, s.uk)(),
							I = {
								loadMoreText: 'Load More',
								loadingLocation: 'button',
								loadingIcon: 'spinner',
								progressIndicatorWidth: '300px',
								progressIndicatorSize: '5px',
								treePath: (0, M.LU)(),
							},
							g = (0, x.v6)('loadMore', _, I, u),
							{
								pagination: S,
								controller: B,
								onClick: U,
								autoFetch: F,
								intersectionOffset: $,
								loading: z,
								loadMoreText: J,
								hideProgressIndicator: H,
								hideProgressText: Z,
								loadingLocation: f,
								loadingIcon: L,
								disableStyles: R,
								className: X,
								internalClassName: oe,
								treePath: Q,
								customComponent: q,
							} = g;
						if (q) {
							const K = (0, V.x)(c?.templates?.library.import.component.loadMore || {}, q);
							if (K) return (0, o.Y)(K, { ...g });
						}
						const D = S || B?.store?.pagination,
							C = typeof z == 'boolean' ? z : B?.store?.loading,
							ne = (C && f === 'button') || !D?.next,
							Y = {
								button: {
									internalClassName: r()(
										'ss__load-more__button',
										{ 'ss__load-more__button--hidden': C && f === 'outside' },
										{ 'ss__load-more__button--disabled': ne }
									),
									...(0, y.s)({ disableStyles: R }),
									theme: g?.theme,
									treePath: Q,
								},
								icon: { internalClassName: 'ss__load-more__icon', ...(0, y.s)({ disableStyles: R }), theme: g?.theme, treePath: Q },
							};
						if (!D) return null;
						const ee = (0, A.Z)({ ...g, pagination: D }, m),
							G = {};
						if (F) {
							const K = (0, i.li)(null);
							G.ref = K;
							const re = (0, v.v)(K, $ || '0px'),
								[ae, se] = (0, i.J0)(!0);
							C
								? se(!0)
								: (0, k.d)(() => {
										se(!1);
								  }, 500),
								re && D.next && !ae && D.next.url.go({ history: 'replace' });
						}
						const te = {
								loadMoreButton: { value: J, attributes: { 'aria-label': J } },
								progressText: { value: `You've viewed ${D?.end} of ${D?.totalResults} products` },
							},
							N = E()(te, g.lang || {}),
							T = (0, j.u)(N, { pagination: D });
						return D.totalResults
							? (0, o.Y)(h._, {
									children: (0, o.FD)('div', {
										...ee,
										...G,
										className: r()('ss__load-more', { 'ss__load-more--loading': C }, { 'ss__load-more--autoFetch': F }, X, oe),
										children: [
											!F &&
												(0, o.FD)(o.FK, {
													children: [
														(0, o.FD)(w.$, {
															onClick: (K) => {
																D.next?.url.go({ history: 'replace' }), U && U(K);
															},
															...Y.button,
															...T.loadMoreButton.attributes,
															children: [
																(0, o.Y)('span', { ...T.loadMoreButton.value, children: J }),
																L && C && f === 'button' ? (0, o.Y)(W.I, { ...Y.icon, ...(typeof L == 'string' ? { icon: L } : L) }) : null,
															],
														}),
														L && C && f === 'outside' && (0, o.Y)(W.I, { ...Y.icon, ...(typeof L == 'string' ? { icon: L } : L) }),
													],
												}),
											(!H || !Z) &&
												(0, o.Y)('div', {
													className: 'ss__load-more__progress',
													children: (0, o.FD)(o.FK, {
														children: [
															!H &&
																(0, o.Y)('div', {
																	className: 'ss__load-more__progress__indicator',
																	children: (0, o.Y)('div', { className: 'ss__load-more__progress__indicator__bar' }),
																}),
															!Z &&
																(0, o.Y)('div', {
																	'aria-atomic': 'true',
																	'aria-live': 'polite',
																	className: 'ss__load-more__progress__text',
																	...T.progressText?.all,
																}),
														],
													}),
												}),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/hooks/useA11y.tsx'(P, l, e) {
				'use strict';
				e.d(l, { DH: () => d, aZ: () => n, iy: () => r });
				const o = 9,
					i = 27,
					n = 'ss-a11y',
					d =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function r(t, a, E, h) {
					const b = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${b}`)) {
						const s = document.createElement('style');
						(s.type = 'text/css'),
							(s.id = b),
							(s.innerHTML = `[${n}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(s);
					}
					t &&
						!t.attributes?.[n] &&
						(t.setAttribute(n, !0),
						t.setAttribute('tabIndex', `${a || 0}`),
						t.addEventListener('keydown', (s) => {
							(s.code === 'Space' || s.code === 'Enter') && t.click();
						}),
						E &&
							t.addEventListener('keydown', function (s) {
								const M = t.querySelectorAll(d),
									y = M[0],
									x = M[M.length - 1];
								if (s.keyCode == i) {
									t.focus(), h && h(s), s.preventDefault(), s.stopPropagation();
									return;
								}
								(s.key === 'Tab' || s.keyCode === o) &&
									(s.shiftKey
										? document.activeElement === y && (x.focus(), s.preventDefault())
										: document.activeElement === x && (y.focus(), s.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useFuncDebounce.tsx'(P, l, e) {
				'use strict';
				e.d(l, { d: () => i });
				var o = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const i = (n, d) => {
					const r = (0, o.li)(n);
					(r.current = n),
						(0, o.vJ)(() => {
							const t = setTimeout(() => {
								r.current();
							}, d);
							return () => {
								clearTimeout(t);
							};
						}, [n, d]);
				};
			},
			'./components/src/hooks/useIntersection.tsx'(P, l, e) {
				'use strict';
				e.d(l, { v: () => i });
				var o = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const i = (n, d = '0px', r = !1) => {
					const [t, a] = (0, o.J0)(!1);
					return (
						(0, o.vJ)(() => {
							const E = new IntersectionObserver(
								([h]) => {
									a(h.isIntersecting), r && h.isIntersecting && E.unobserve(n.current);
								},
								{ rootMargin: d }
							);
							return (
								n.current && E.observe(n.current),
								() => {
									E.unobserve(n.current);
								}
							);
						}, []),
						t
					);
				};
			},
			'./components/src/hooks/useLang.tsx'(P, l, e) {
				'use strict';
				e.d(l, { u: () => o });
				const o = (i, n) => {
					const d = {};
					return (
						Object.keys(i).forEach((r) => {
							const t = i && i[r],
								a = {};
							t &&
								(t?.value &&
									(typeof t.value == 'function'
										? (a.value = { 'ss-lang': r, dangerouslySetInnerHTML: { __html: t.value(n) } })
										: (a.value = { 'ss-lang': r, dangerouslySetInnerHTML: { __html: t.value } })),
								t?.attributes &&
									Object.keys(t?.attributes).length &&
									((a.attributes = { 'ss-lang': r }),
									t?.attributes?.['aria-label'] &&
										(typeof t.attributes?.['aria-label'] == 'function'
											? (a.attributes['aria-label'] = t.attributes['aria-label'](n))
											: (a.attributes['aria-label'] = t.attributes['aria-label'])),
									t?.attributes?.['aria-valuetext'] &&
										(typeof t.attributes?.['aria-valuetext'] == 'function'
											? (a.attributes['aria-valuetext'] = t.attributes['aria-valuetext'](n))
											: (a.attributes['aria-valuetext'] = t.attributes['aria-valuetext'])),
									t?.attributes?.title &&
										(typeof t.attributes?.title == 'function'
											? (a.attributes.title = t.attributes.title(n))
											: (a.attributes.title = t.attributes.title)),
									t?.attributes?.alt &&
										(typeof t.attributes?.alt == 'function' ? (a.attributes.alt = t.attributes.alt(n)) : (a.attributes.alt = t.attributes.alt)),
									t?.attributes?.placeholder &&
										(typeof t.attributes?.placeholder == 'function'
											? (a.attributes.placeholder = t.attributes.placeholder(n))
											: (a.attributes.placeholder = t.attributes.placeholder))),
								(a.all = { ...a.value, ...a.attributes, 'ss-lang': r })),
								(d[r] = a);
						}),
						d
					);
				};
			},
			'./components/src/utilities/componentArgs.ts'(P, l, e) {
				'use strict';
				e.d(l, { F: () => o });
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
			'./components/src/utilities/defined.ts'(P, l, e) {
				'use strict';
				e.d(l, { s: () => o });
				function o(i) {
					const n = {};
					return (
						Object.keys(i).map((d) => {
							i[d] !== void 0 && (n[d] = i[d]);
						}),
						n
					);
				}
			},
			'./components/src/utilities/snapify.ts'(P, l, e) {
				'use strict';
				e.d(l, { p: () => V });
				var o = e('../../node_modules/mobx/dist/mobx.esm.js'),
					i = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					n = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					d = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					r = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					t = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					a = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					E = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					h = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					b = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					s = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					M = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					y = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					x = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					A = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, o.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const v = {},
					j = { globals: { siteId: 'atkzs2' } };
				class V {
					static recommendation(p) {
						const u = p.id;
						if (v[u]) return v[u];
						const _ = (v[u] = W({ client: j, controller: p }));
						return (
							_.on('afterStore', async ({ controller: c }, O) => {
								c.log.debug('controller', c), c.log.debug('store', c.store.toJSON()), await O();
							}),
							_.init(),
							_
						);
					}
					static autocomplete(p) {
						const u = p.id;
						if (v[u]) return v[u];
						const _ = (v[u] = k({ client: j, controller: p }));
						return (
							_.on('afterStore', async ({ controller: c }, O) => {
								c.log.debug('controller', c), c.log.debug('store', c.store.toJSON()), await O();
							}),
							_.init(),
							_
						);
					}
					static search(p) {
						const u = p.id;
						if (v[u]) return v[u];
						const _ = (v[u] = w({ client: j, controller: p }));
						return (
							_.on('afterStore', async ({ controller: c }, O) => {
								c.log.debug('controller', c), c.log.debug('store', c.store.toJSON()), await O();
							}),
							_.init(),
							_
						);
					}
				}
				function w(m) {
					const p = new h.V(new s.E({ settings: { coreType: 'query', corePrefix: m.controller.id } }), b.X);
					return new i.Tp(m.controller, {
						client: new r.K(m.client.globals, m.client.config),
						store: new a.U(m.controller, { urlManager: p }),
						urlManager: p,
						eventManager: new M.E(),
						profiler: new y.U(),
						logger: new x.V(),
						tracker: new A.J(m.client.globals),
					});
				}
				function W(m) {
					const p = new h.V(new s.E(), b.X).detach(!0);
					return new d.c(m.controller, {
						client: new r.K(m.client.globals, m.client.config),
						store: new E.t(m.controller, { urlManager: p }),
						urlManager: p,
						eventManager: new M.E(),
						profiler: new y.U(),
						logger: new x.V(),
						tracker: new A.J(m.client.globals),
					});
				}
				function k(m) {
					const p = new h.V(new s.E(), b.X).detach();
					return new n.Z(m.controller, {
						client: new r.K(m.client.globals, m.client.config),
						store: new t.Y(m.controller, { urlManager: p }),
						urlManager: p,
						eventManager: new M.E(),
						profiler: new y.U(),
						logger: new x.V(),
						tracker: new A.J(m.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(P, l, e) {
				'use strict';
				e.d(l, { Z: () => d });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const n = 'prism-block',
					d = (r) => {
						const t = (0, i.li)(null);
						return (
							(0, i.vJ)(() => {
								t.current && r.className?.includes('lang-') && !r.className?.includes(n) && window?.Prism?.highlightElement(t.current);
							}, [r.className, r.children, t]),
							(0, o.Y)('code', { ...r, ref: t, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(P) {
				function l(e) {
					var o = new Error("Cannot find module '" + e + "'");
					throw ((o.code = 'MODULE_NOT_FOUND'), o);
				}
				(l.keys = () => []), (l.resolve = l), (l.id = '../../node_modules/memoizerific sync recursive'), (P.exports = l);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-LoadMore-LoadMore-stories.69c002c1.iframe.bundle.js.map
