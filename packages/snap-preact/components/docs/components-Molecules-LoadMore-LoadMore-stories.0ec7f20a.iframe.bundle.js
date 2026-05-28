(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9983],
		{
			'./components/src/components/Molecules/LoadMore/LoadMore.stories.tsx'(P, i, e) {
				'use strict';
				e.r(i), e.d(i, { Default: () => s, __namedExportsOrder: () => b, default: () => g });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					n = e('./components/src/components/Molecules/LoadMore/LoadMore.tsx'),
					u = e('./components/src/utilities/storybook.tsx'),
					r = e('./components/src/utilities/componentArgs.ts'),
					t = e('./components/src/components/Atoms/Icon/paths.tsx'),
					a = e('./components/src/utilities/snapify.ts');
				const f =
						"# LoadMore\n\nRenders a \"Load More\" button that displays the next page of results. Recommended to be used with SearchController's `infinite` config\n\n## Sub-components\n- Button\n\n## Usage\n\n### pagination / controller\nThe required `pagination` (or `controller`) prop specifies a reference to the pagination store object.\n\n```tsx\n<LoadMore pagination={controller.store.pagination} />\n```\n\n```tsx\n<LoadMore controller={controller} />\n```\n\n### autoFetch\nThe `autoFetch` prop will not render a \"Show More\" button and instead fetch the next page of results when the component appears in the viewport. Recommended to place underneath Results to allow for infinite scrolling. \n\n```tsx\n<LoadMore pagination={controller.store.pagination} autoFetch={true} />\n```\n\nCan be used in combination with `hideProgressIndicator` and `hideProgressText` to not display anything and have infinite scrolling still function:\n\n```tsx\n<LoadMore pagination={controller.store.pagination} autoFetch={true} hideProgressIndicator={true} hideProgressText={true} />\n```\n\n### intersectionOffset + autoFetch\nRequires `autoFetch` prop to be `true`. The `intersectionOffset` prop defines the IntersectionObserver's `rootMargin` value. This is an offset added to each side of the component's bounding box to create the final root bounds. These bounds then determine when the component is in the viewport and the next results are fetched. Default: `0px`\n\n```tsx\n<LoadMore pagination={controller.store.pagination} autoFetch={true} intersectionOffset={'40px'} />\n```\n\n### loading\nThe `loading` prop is not required if the `controller` prop is provided.\n\nIf the `pagination` prop is used, the `loading` prop should contain a value from `controller.store.loading` to allow for the \"Load More\" button to be disabled and the spinner icon visible while fetching results.\n\n```tsx\n<LoadMore pagination={controller.store.pagination} loading={controller.store.loading} />\n```\n\n### loadMoreText\nThe `loadMoreText` prop sets the button text. Default value: \"Load More\"\n\n```tsx\n<LoadMore pagination={controller.store.pagination} loadMoreText={'Load More'} />\n```\n\n### color\nThe `color` prop specifies the color of the indicator active state.\n\n```tsx\n<LoadMore pagination={controller.store.pagination} color={'#ffff00'} />\n```\n\n### backgroundColor\nThe `backgroundColor` prop specifies the background color of the indicator.\n\n```tsx\n<LoadMore pagination={controller.store.pagination} backgroundColor={'#eeeeee'} />\n```\n\n### progressIndicatorWidth\nThe `progressIndicatorWidth` prop sets the progress indicator width. Recommended units: `px`, `rem`, `em`, `vw`.\n\n```tsx\n<LoadMore pagination={controller.store.pagination} progressIndicatorWidth={'300px'} />\n```\n\n### progressIndicatorSize\nThe `progressIndicatorSize` prop sets the progress indicator size. Recommended units: `px`, `rem`, `em`, `vw`. Unsupported unit: `%` not recommended. \n\n```tsx\n<LoadMore pagination={controller.store.pagination} progressIndicatorSize={'5px'} />\n```\n\n### hideProgressIndicator\nThe `hideProgressIndicator` prop hides the progress indicator.\n\n```tsx\n<LoadMore pagination={controller.store.pagination} hideProgressIndicator={true} />\n```\n\n### hideProgressText\nThe `hideProgressText` prop hides the progress text.\n\n```tsx\n<LoadMore pagination={controller.store.pagination} hideProgressText={true} />\n```\n\n### hideProgressIndicator + hideProgressText\nWhen both `hideProgressIndicator` and `hideProgressText` props are `true` only the button will be displayed.\n\n```tsx\n<LoadMore pagination={controller.store.pagination} hideProgressIndicator={true} hideProgressText={true} />\n```\n\n### loadingIcon\nThe `loadingIcon` prop defines the icon used when loading. Default: `spinner`\n\n```tsx\n<LoadMore pagination={controller.store.pagination} loadingIcon={'spinner'} />\n```\n\n### loadingLocation\nThe `loadingLocation` prop defines the location of the loading icon. Default: `button` will be displayed within the \"Load More\" button. Alternative value of `outside` will display the loading icon in place of the button.\n\n### onClick\nThe `onClick` prop allows for a custom callback function for when the button is clicked.\n\n```tsx\n<LoadMore pagination={controller.store.pagination} onClick={(e)=>{console.log(e)}} />\n```\n",
					g = {
						title: 'Molecules/LoadMore',
						component: n.e,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, o.FD)('div', {
										children: [(0, o.Y)(l.oz, { options: { overrides: { code: u.Z } }, children: f }), (0, o.Y)(l.uY, { story: l.h1 })],
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
					E = a.p.search({
						id: 'LoadMore',
						globals: { siteId: 'atkzs2', filters: [{ type: 'value', field: 'color_family', value: 'Beige', background: !0 }] },
					}),
					s = (M, { loaded: { controller: x } }) => (0, o.Y)(n.e, { ...M, controller: x });
				(s.loaders = [async () => (await E.search(), { controller: E })]),
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
				const b = ['Default'];
			},
			'./components/src/components/Atoms/Button/Button.tsx'(P, i, e) {
				'use strict';
				e.d(i, { $: () => Y });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = e('../../node_modules/classnames/index.js'),
					u = e.n(n),
					r = e('../../node_modules/mobx-react-lite/es/index.js'),
					t = e('./components/src/providers/cache.tsx'),
					a = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = e('./components/src/providers/snap.tsx'),
					g = e('./components/src/providers/treePath.tsx'),
					E = e('./components/src/hooks/useA11y.tsx'),
					s = e('./components/src/utilities/cloneWithProps.tsx'),
					b = e('./components/src/utilities/defined.ts'),
					M = e('./components/src/utilities/mergeProps.ts'),
					x = e('./components/src/utilities/mergeStyles.ts'),
					C = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					y = e('./components/src/hooks/useLang.tsx'),
					B = e('./components/src/hooks/useComponent.tsx'),
					S = e('../../node_modules/deepmerge/dist/cjs.js'),
					F = e.n(S);
				const W = ({ native: c, color: m, backgroundColor: p, borderColor: _, theme: d }) =>
						c
							? (0, l.AH)({})
							: (0, l.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: m || d?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: p || '#fff',
									border: `1px solid ${_ || m || d?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  }),
					Y = (0, r.PA)((c) => {
						const m = (0, a.u)(),
							p = (0, f.uk)(),
							d = { disableA11y: !1, treePath: (0, g.LU)() },
							v = (0, M.v6)('button', m, d, c),
							{
								content: A,
								children: h,
								disabled: j,
								native: N,
								onClick: V,
								disableA11y: w,
								disableStyles: X,
								className: H,
								internalClassName: k,
								icon: D,
								lang: J,
								treePath: T,
								customComponent: O,
								style: G,
								styleScript: te,
								themeStyleScript: oe,
								...Z
							} = v;
						if (O) {
							const R = (0, B.x)(p?.templates?.library.import.component.button || {}, O);
							if (R) return (0, o.Y)(R, { ...v });
						}
						const $ = { icon: { internalClassName: 'ss__button__icon', ...(0, b.s)({ disableStyles: X }), theme: v?.theme, treePath: T } },
							I = {
								...(0, x.Z)(v, W),
								className: u()('ss__button', { 'ss__button--native': N, 'ss__button--disabled': j }, H, k),
								disabled: j,
								onClick: (R) => !j && V && V(R),
								...Z,
							},
							Q = { ref: (R) => (0, E.iy)(R) },
							z = {},
							q = F()(z, J || {}),
							U = (0, y.u)(q, {});
						return A || h || D || J?.button?.value
							? (0, o.Y)(t._, {
									children: N
										? (0, o.FD)('button', {
												...I,
												children: [
													(0, o.FD)('span', {
														className: 'ss__button__content',
														...U.button?.all,
														children: [(0, s.Y)(A, { treePath: T }), (0, s.Y)(h, { treePath: T })],
													}),
													D && (0, o.Y)(C.I, { ...$.icon, ...(typeof D == 'string' ? { icon: D } : D) }),
												],
										  })
										: (0, o.FD)('div', {
												...(w ? {} : Q),
												role: 'button',
												'aria-disabled': j,
												...I,
												...U.button?.attributes,
												children: [
													A || h || U.button?.value
														? (0, o.FD)('span', {
																className: 'ss__button__content',
																...U.button?.value,
																children: [(0, s.Y)(A, { treePath: T }), (0, s.Y)(h, { treePath: T })],
														  })
														: void 0,
													D && (0, o.Y)(C.I, { ...$.icon, ...(typeof D == 'string' ? { icon: D } : D) }),
												],
										  }),
							  })
							: null;
					});
			},
			'./components/src/components/Molecules/LoadMore/LoadMore.tsx'(P, i, e) {
				'use strict';
				e.d(i, { e: () => m });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					n = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					u = e('../../node_modules/classnames/index.js'),
					r = e.n(u),
					t = e('../../node_modules/mobx-react-lite/es/index.js'),
					a = e('../../node_modules/deepmerge/dist/cjs.js'),
					f = e.n(a),
					g = e('./components/src/providers/cache.tsx'),
					E = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					s = e('./components/src/providers/snap.tsx'),
					b = e('./components/src/providers/treePath.tsx'),
					M = e('./components/src/utilities/defined.ts'),
					x = e('./components/src/utilities/mergeProps.ts'),
					C = e('./components/src/utilities/mergeStyles.ts'),
					y = e('./components/src/hooks/useIntersection.tsx'),
					B = e('./components/src/hooks/useLang.tsx'),
					S = e('./components/src/hooks/useComponent.tsx'),
					F = e('./components/src/components/Atoms/Button/Button.tsx'),
					W = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					Y = e('./components/src/hooks/useFuncDebounce.tsx');
				const c = ({ pagination: p, progressIndicatorWidth: _, progressIndicatorSize: d, color: v, backgroundColor: A, theme: h }) =>
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
										background: A || h?.variables?.colors?.secondary || '#f8f8f8',
										borderRadius: d,
										'& .ss__load-more__progress__indicator__bar': {
											width: p ? `${(p.end / p.totalResults) * 100}%` : '',
											background: v || h?.variables?.colors?.primary || '#ccc',
											borderRadius: d,
											height: d,
										},
									},
									'& .ss__load-more__progress__text': { textAlign: 'center' },
								},
							},
						}),
					m = (0, t.PA)((p) => {
						const _ = (0, E.u)(),
							d = (0, s.uk)(),
							A = {
								loadMoreText: 'Load More',
								loadingLocation: 'button',
								loadingIcon: 'spinner',
								progressIndicatorWidth: '300px',
								progressIndicatorSize: '5px',
								treePath: (0, b.LU)(),
							},
							h = (0, x.v6)('loadMore', _, A, p),
							{
								pagination: j,
								controller: N,
								onClick: V,
								autoFetch: w,
								intersectionOffset: X,
								loading: H,
								loadMoreText: k,
								hideProgressIndicator: D,
								hideProgressText: J,
								loadingLocation: T,
								loadingIcon: O,
								disableStyles: G,
								className: te,
								internalClassName: oe,
								treePath: Z,
								customComponent: $,
							} = h;
						if ($) {
							const K = (0, S.x)(d?.templates?.library.import.component.loadMore || {}, $);
							if (K) return (0, o.Y)(K, { ...h });
						}
						const L = j || N?.store?.pagination,
							I = typeof H == 'boolean' ? H : N?.store?.loading,
							Q = (I && T === 'button') || !L?.next,
							z = {
								button: {
									internalClassName: r()(
										'ss__load-more__button',
										{ 'ss__load-more__button--hidden': I && T === 'outside' },
										{ 'ss__load-more__button--disabled': Q }
									),
									...(0, M.s)({ disableStyles: G }),
									theme: h?.theme,
									treePath: Z,
								},
								icon: { internalClassName: 'ss__load-more__icon', ...(0, M.s)({ disableStyles: G }), theme: h?.theme, treePath: Z },
							};
						if (!L) return null;
						const q = (0, C.Z)({ ...h, pagination: L }, c),
							U = {};
						if (w) {
							const K = (0, l.li)(null);
							U.ref = K;
							const re = (0, y.v)(K, X || '0px'),
								[ae, ne] = (0, l.J0)(!0);
							I
								? ne(!0)
								: (0, Y.d)(() => {
										ne(!1);
								  }, 500),
								re && L.next && !ae && L.next.url.go({ history: 'replace' });
						}
						const R = {
								loadMoreButton: { value: k, attributes: { 'aria-label': k } },
								progressText: { value: `You've viewed ${L?.end} of ${L?.totalResults} products` },
							},
							se = f()(R, h.lang || {}),
							ee = (0, B.u)(se, { pagination: L });
						return L.totalResults
							? (0, o.Y)(g._, {
									children: (0, o.FD)('div', {
										...q,
										...U,
										className: r()('ss__load-more', { 'ss__load-more--loading': I }, { 'ss__load-more--autoFetch': w }, te, oe),
										children: [
											!w &&
												(0, o.FD)(o.FK, {
													children: [
														(0, o.FD)(F.$, {
															onClick: (K) => {
																L.next?.url.go({ history: 'replace' }), V && V(K);
															},
															...z.button,
															...ee.loadMoreButton.attributes,
															children: [
																(0, o.Y)('span', { ...ee.loadMoreButton.value, children: k }),
																O && I && T === 'button' ? (0, o.Y)(W.I, { ...z.icon, ...(typeof O == 'string' ? { icon: O } : O) }) : null,
															],
														}),
														O && I && T === 'outside' && (0, o.Y)(W.I, { ...z.icon, ...(typeof O == 'string' ? { icon: O } : O) }),
													],
												}),
											(!D || !J) &&
												(0, o.Y)('div', {
													className: 'ss__load-more__progress',
													children: (0, o.FD)(o.FK, {
														children: [
															!D &&
																(0, o.Y)('div', {
																	className: 'ss__load-more__progress__indicator',
																	children: (0, o.Y)('div', { className: 'ss__load-more__progress__indicator__bar' }),
																}),
															!J &&
																(0, o.Y)('div', {
																	'aria-atomic': 'true',
																	'aria-live': 'polite',
																	className: 'ss__load-more__progress__text',
																	...ee.progressText?.all,
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
			'./components/src/hooks/useA11y.tsx'(P, i, e) {
				'use strict';
				e.d(i, { DH: () => u, aZ: () => n, iy: () => r });
				const o = 9,
					l = 27,
					n = 'ss-a11y',
					u =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function r(t, a, f, g) {
					const E = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${E}`)) {
						const s = document.createElement('style');
						(s.type = 'text/css'),
							(s.id = E),
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
						f &&
							t.addEventListener('keydown', function (s) {
								const b = t.querySelectorAll(u),
									M = b[0],
									x = b[b.length - 1];
								if (s.keyCode == l) {
									t.focus(), g && g(s), s.preventDefault(), s.stopPropagation();
									return;
								}
								(s.key === 'Tab' || s.keyCode === o) &&
									(s.shiftKey
										? document.activeElement === M && (x.focus(), s.preventDefault())
										: document.activeElement === x && (M.focus(), s.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useFuncDebounce.tsx'(P, i, e) {
				'use strict';
				e.d(i, { d: () => l });
				var o = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const l = (n, u) => {
					const r = (0, o.li)(n);
					(r.current = n),
						(0, o.vJ)(() => {
							const t = setTimeout(() => {
								r.current();
							}, u);
							return () => {
								clearTimeout(t);
							};
						}, [n, u]);
				};
			},
			'./components/src/hooks/useIntersection.tsx'(P, i, e) {
				'use strict';
				e.d(i, { v: () => l });
				var o = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const l = (n, u = '0px', r = !1) => {
					const [t, a] = (0, o.J0)(!1);
					return (
						(0, o.vJ)(() => {
							const f = new IntersectionObserver(
								([g]) => {
									a(g.isIntersecting), r && g.isIntersecting && f.unobserve(n.current);
								},
								{ rootMargin: u }
							);
							return (
								n.current && f.observe(n.current),
								() => {
									f.unobserve(n.current);
								}
							);
						}, []),
						t
					);
				};
			},
			'./components/src/hooks/useLang.tsx'(P, i, e) {
				'use strict';
				e.d(i, { u: () => o });
				const o = (l, n) => {
					const u = {};
					return (
						Object.keys(l).forEach((r) => {
							const t = l && l[r],
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
								(u[r] = a);
						}),
						u
					);
				};
			},
			'./components/src/utilities/componentArgs.ts'(P, i, e) {
				'use strict';
				e.d(i, { F: () => o });
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
			'./components/src/utilities/defined.ts'(P, i, e) {
				'use strict';
				e.d(i, { s: () => o });
				function o(l) {
					const n = {};
					return (
						Object.keys(l).map((u) => {
							l[u] !== void 0 && (n[u] = l[u]);
						}),
						n
					);
				}
			},
			'./components/src/utilities/snapify.ts'(P, i, e) {
				'use strict';
				e.d(i, { p: () => S });
				var o = e('../../node_modules/mobx/dist/mobx.esm.js'),
					l = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					n = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					u = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					r = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					t = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					a = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					f = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					g = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					E = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					s = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					b = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					M = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					x = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					C = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, o.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const y = {},
					B = { globals: { siteId: 'atkzs2' } };
				class S {
					static recommendation(m) {
						const p = m.id;
						if (y[p]) return y[p];
						const _ = (y[p] = W({ client: B, controller: m }));
						return (
							_.on('afterStore', async ({ controller: d }, v) => {
								d.log.debug('controller', d), d.log.debug('store', d.store.toJSON()), await v();
							}),
							_.init(),
							_
						);
					}
					static autocomplete(m) {
						const p = m.id;
						if (y[p]) return y[p];
						const _ = (y[p] = Y({ client: B, controller: m }));
						return (
							_.on('afterStore', async ({ controller: d }, v) => {
								d.log.debug('controller', d), d.log.debug('store', d.store.toJSON()), await v();
							}),
							_.init(),
							_
						);
					}
					static search(m) {
						const p = m.id;
						if (y[p]) return y[p];
						const _ = (y[p] = F({ client: B, controller: m }));
						return (
							_.on('afterStore', async ({ controller: d }, v) => {
								d.log.debug('controller', d), d.log.debug('store', d.store.toJSON()), await v();
							}),
							_.init(),
							_
						);
					}
				}
				function F(c) {
					const m = new g.V(new s.E({ settings: { coreType: 'query', corePrefix: c.controller.id } }), E.X);
					return new l.Tp(c.controller, {
						client: new r.K(c.client.globals, c.client.config),
						store: new a.U(c.controller, { urlManager: m }),
						urlManager: m,
						eventManager: new b.E(),
						profiler: new M.U(),
						logger: new x.V(),
						tracker: new C.J(c.client.globals),
					});
				}
				function W(c) {
					const m = new g.V(new s.E(), E.X).detach(!0);
					return new u.c(c.controller, {
						client: new r.K(c.client.globals, c.client.config),
						store: new f.t(c.controller, { urlManager: m }),
						urlManager: m,
						eventManager: new b.E(),
						profiler: new M.U(),
						logger: new x.V(),
						tracker: new C.J(c.client.globals),
					});
				}
				function Y(c) {
					const m = new g.V(new s.E(), E.X).detach();
					return new n.Z(c.controller, {
						client: new r.K(c.client.globals, c.client.config),
						store: new t.Y(c.controller, { urlManager: m }),
						urlManager: m,
						eventManager: new b.E(),
						profiler: new M.U(),
						logger: new x.V(),
						tracker: new C.J(c.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(P, i, e) {
				'use strict';
				e.d(i, { Z: () => u });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const n = 'prism-block',
					u = (r) => {
						const t = (0, l.li)(null);
						return (
							(0, l.vJ)(() => {
								t.current && r.className?.includes('lang-') && !r.className?.includes(n) && window?.Prism?.highlightElement(t.current);
							}, [r.className, r.children, t]),
							(0, o.Y)('code', { ...r, ref: t, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(P) {
				function i(e) {
					var o = new Error("Cannot find module '" + e + "'");
					throw ((o.code = 'MODULE_NOT_FOUND'), o);
				}
				(i.keys = () => []), (i.resolve = i), (i.id = '../../node_modules/memoizerific sync recursive'), (P.exports = i);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-LoadMore-LoadMore-stories.0ec7f20a.iframe.bundle.js.map
