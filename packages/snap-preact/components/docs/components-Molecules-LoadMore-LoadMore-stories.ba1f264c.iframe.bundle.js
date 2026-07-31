(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9983],
		{
			'./components/src/components/Molecules/LoadMore/LoadMore.stories.tsx'(v, i, e) {
				'use strict';
				e.r(i), e.d(i, { Default: () => s, __namedExportsOrder: () => E, default: () => n });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					r = e('./components/src/components/Molecules/LoadMore/LoadMore.tsx'),
					m = e('./components/src/utilities/storybook.tsx'),
					a = e('./components/src/utilities/componentArgs.ts'),
					l = e('./components/src/components/Atoms/Icon/paths.tsx'),
					f = e('./components/src/utilities/snapify.ts');
				const o =
						"# LoadMore\n\nRenders a \"Load More\" button that displays the next page of results. Recommended to be used with SearchController's `infinite` config\n\n## Sub-components\n- Button\n\n## Usage\n\n### pagination / controller\nThe required `pagination` (or `controller`) prop specifies a reference to the pagination store object.\n\n```tsx\n<LoadMore pagination={controller.store.pagination} />\n```\n\n```tsx\n<LoadMore controller={controller} />\n```\n\n### autoFetch\nThe `autoFetch` prop will not render a \"Show More\" button and instead fetch the next page of results when the component appears in the viewport. Recommended to place underneath Results to allow for infinite scrolling. \n\n```tsx\n<LoadMore pagination={controller.store.pagination} autoFetch={true} />\n```\n\nCan be used in combination with `hideProgressIndicator` and `hideProgressText` to not display anything and have infinite scrolling still function:\n\n```tsx\n<LoadMore pagination={controller.store.pagination} autoFetch={true} hideProgressIndicator={true} hideProgressText={true} />\n```\n\n### intersectionOffset + autoFetch\nRequires `autoFetch` prop to be `true`. The `intersectionOffset` prop defines the IntersectionObserver's `rootMargin` value. This is an offset added to each side of the component's bounding box to create the final root bounds. These bounds then determine when the component is in the viewport and the next results are fetched. Default: `0px`\n\n```tsx\n<LoadMore pagination={controller.store.pagination} autoFetch={true} intersectionOffset={'40px'} />\n```\n\n### loading\nThe `loading` prop is not required if the `controller` prop is provided.\n\nIf the `pagination` prop is used, the `loading` prop should contain a value from `controller.store.loading` to allow for the \"Load More\" button to be disabled and the spinner icon visible while fetching results.\n\n```tsx\n<LoadMore pagination={controller.store.pagination} loading={controller.store.loading} />\n```\n\n### loadMoreText\nThe `loadMoreText` prop sets the button text. Default value: \"Load More\"\n\n```tsx\n<LoadMore pagination={controller.store.pagination} loadMoreText={'Load More'} />\n```\n\n### color\nThe `color` prop specifies the color of the indicator active state.\n\n```tsx\n<LoadMore pagination={controller.store.pagination} color={'#ffff00'} />\n```\n\n### backgroundColor\nThe `backgroundColor` prop specifies the background color of the indicator.\n\n```tsx\n<LoadMore pagination={controller.store.pagination} backgroundColor={'#eeeeee'} />\n```\n\n### progressIndicatorWidth\nThe `progressIndicatorWidth` prop sets the progress indicator width. Recommended units: `px`, `rem`, `em`, `vw`.\n\n```tsx\n<LoadMore pagination={controller.store.pagination} progressIndicatorWidth={'300px'} />\n```\n\n### progressIndicatorSize\nThe `progressIndicatorSize` prop sets the progress indicator size. Recommended units: `px`, `rem`, `em`, `vw`. Unsupported unit: `%` not recommended. \n\n```tsx\n<LoadMore pagination={controller.store.pagination} progressIndicatorSize={'5px'} />\n```\n\n### hideProgressIndicator\nThe `hideProgressIndicator` prop hides the progress indicator.\n\n```tsx\n<LoadMore pagination={controller.store.pagination} hideProgressIndicator={true} />\n```\n\n### hideProgressText\nThe `hideProgressText` prop hides the progress text.\n\n```tsx\n<LoadMore pagination={controller.store.pagination} hideProgressText={true} />\n```\n\n### hideProgressIndicator + hideProgressText\nWhen both `hideProgressIndicator` and `hideProgressText` props are `true` only the button will be displayed.\n\n```tsx\n<LoadMore pagination={controller.store.pagination} hideProgressIndicator={true} hideProgressText={true} />\n```\n\n### loadingIcon\nThe `loadingIcon` prop defines the icon used when loading. Default: `spinner`\n\n```tsx\n<LoadMore pagination={controller.store.pagination} loadingIcon={'spinner'} />\n```\n\n### loadingLocation\nThe `loadingLocation` prop defines the location of the loading icon. Default: `button` will be displayed within the \"Load More\" button. Alternative value of `outside` will display the loading icon in place of the button.\n\n### onClick\nThe `onClick` prop allows for a custom callback function for when the button is clicked.\n\n```tsx\n<LoadMore pagination={controller.store.pagination} onClick={(e)=>{console.log(e)}} />\n```\n\n## Lang\n\nThe `lang` prop allows you to override translatable text strings used by the LoadMore component. All lang entries support a `value` (static string or function) and `attributes` (e.g. `aria-label`).\n\n| Lang Key | Description | Data Provided |\n|---|---|---|\n| `loadMoreButton` | Load more button text | `pagination` (SearchPaginationStore) |\n| `progressText` | Progress indicator text | `pagination` (SearchPaginationStore) |\n\n### Example\n\n```tsx\n<LoadMore\n	pagination={controller.store.pagination}\n	lang={{\n		loadMoreButton: {\n			value: 'Load More Products',\n			attributes: {\n				'aria-label': 'Load more products',\n			},\n		},\n		progressText: {\n			value: (data) => `You've viewed ${data.pagination?.end} of ${data.pagination?.totalResults} products`,\n		},\n	}}\n/>\n```\n",
					n = {
						title: 'Molecules/LoadMore',
						component: r.e,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(c.oz, { options: { overrides: { code: m.Z } }, children: o }), (0, t.Y)(c.uY, { story: c.h1 })],
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
								options: [...Object.keys(l.c)],
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
							...a.F,
						},
					},
					b = f.p.search({
						id: 'LoadMore',
						globals: { siteId: 'atkzs2', filters: [{ type: 'value', field: 'color_family', value: 'Beige', background: !0 }] },
					}),
					s = (P, { loaded: { controller: M } }) => (0, t.Y)(r.e, { ...P, controller: M });
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
				const E = ['Default'];
			},
			'./components/src/components/Atoms/Button/Button.tsx'(v, i, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/classnames/index.js'),
					m = e.n(r),
					a = e('../../node_modules/mobx-react-lite/es/index.js'),
					l = e('./components/src/providers/cache.tsx'),
					f = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					o = e('./components/src/providers/treePath.tsx'),
					n = e('./components/src/hooks/useA11y.tsx'),
					b = e('./components/src/utilities/cloneWithProps.tsx'),
					s = e('./components/src/utilities/defined.ts'),
					E = e('./components/src/utilities/mergeProps.ts'),
					P = e('./components/src/utilities/mergeStyles.ts'),
					M = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					C = e('./components/src/hooks/useLang.tsx'),
					y = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					A = e('../../node_modules/deepmerge/dist/cjs.js'),
					K = e.n(A);
				const U = ({ native: B, color: d, backgroundColor: u, borderColor: _, theme: p }) =>
						B
							? (0, c.AH)({})
							: (0, c.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: d || p?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: u || '#fff',
									border: `1px solid ${_ || d || p?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  }),
					W = (0, a.PA)((B) => {
						const d = (0, f.u)(),
							_ = { disableA11y: !1, treePath: (0, o.LU)() },
							p = (0, E.v6)('button', d, _, B),
							{
								content: g,
								children: h,
								disabled: O,
								native: j,
								onClick: S,
								disableA11y: F,
								disableStyles: Z,
								className: k,
								internalClassName: w,
								icon: x,
								lang: N,
								treePath: L,
								style: T,
								styleScript: X,
								themeStyleScript: oe,
								...$
							} = p,
							{ overrideElement: H, shouldRenderDefault: G } = (0, y._)('button', p);
						if (!G) return H;
						const J = { icon: { internalClassName: 'ss__button__icon', ...(0, s.s)({ disableStyles: Z }), theme: p?.theme, treePath: L } },
							I = {
								...(0, P.Z)(p, U),
								className: m()('ss__button', { 'ss__button--native': j, 'ss__button--disabled': O }, k, w),
								disabled: O,
								onClick: (Y) => !O && S && S(Y),
								...$,
							},
							Q = { ref: (Y) => (0, n.iy)(Y) },
							V = {},
							q = K()(V, N || {}),
							R = (0, C.u)(q, {}, { activeBreakpoint: d?.activeBreakpoint }),
							ee = !!$.dangerouslySetInnerHTML;
						return g || h || x || N?.button?.value || ee
							? (0, t.Y)(l._, {
									children: j
										? (0, t.FD)('button', {
												...I,
												children: [
													(0, t.FD)('span', {
														className: 'ss__button__content',
														...R.button?.all,
														children: [(0, b.Y)(g, { treePath: L }), (0, b.Y)(h, { treePath: L })],
													}),
													x && (0, t.Y)(M.I, { ...J.icon, ...(typeof x == 'string' ? { icon: x } : x) }),
												],
										  })
										: (0, t.FD)('div', {
												...(F ? {} : Q),
												role: 'button',
												'aria-disabled': O,
												...I,
												...R.button?.attributes,
												children: [
													g || h || R.button?.value
														? (0, t.FD)('span', {
																className: 'ss__button__content',
																...R.button?.value,
																children: [(0, b.Y)(g, { treePath: L }), (0, b.Y)(h, { treePath: L })],
														  })
														: void 0,
													x && (0, t.Y)(M.I, { ...J.icon, ...(typeof x == 'string' ? { icon: x } : x) }),
												],
										  }),
							  })
							: null;
					});
				e.d(i, ['$', 0, W]);
			},
			'./components/src/components/Molecules/LoadMore/LoadMore.tsx'(v, i, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					r = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					a = e.n(m),
					l = e('../../node_modules/mobx-react-lite/es/index.js'),
					f = e('../../node_modules/deepmerge/dist/cjs.js'),
					o = e.n(f),
					n = e('./components/src/providers/cache.tsx'),
					b = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					s = e('./components/src/providers/treePath.tsx'),
					E = e('./components/src/utilities/defined.ts'),
					P = e('./components/src/utilities/mergeProps.ts'),
					M = e('./components/src/utilities/mergeStyles.ts'),
					C = e('./components/src/hooks/useIntersection.tsx'),
					y = e('./components/src/hooks/useLang.tsx'),
					A = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					K = e('./components/src/components/Atoms/Button/Button.tsx'),
					U = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					W = e('./components/src/hooks/useFuncDebounce.tsx');
				const B = ({ pagination: u, progressIndicatorWidth: _, progressIndicatorSize: p, color: g, backgroundColor: h, theme: O }) =>
						(0, r.AH)({
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							gap: '20px',
							'& .ss__load-more__button--disabled': { opacity: 0.7, pointerEvents: 'none', '&:hover': { cursor: 'default' } },
							'& .ss__load-more__button--hidden': { display: 'none' },
							'& .ss__button': { alignItems: 'center' },
							'& .ss__load-more__icon': {
								marginLeft: '5px',
								animation: `${(0, r.i7)({ '0%': { transform: 'rotate(0deg)' }, '100%': { transform: 'rotate(360deg)' } })} linear 1s infinite`,
							},
							'&.ss__load-more': {
								'& .ss__load-more__progress': {
									display: 'flex',
									flexDirection: 'column',
									gap: '5px',
									'& .ss__load-more__progress__indicator': {
										width: _,
										background: h || O?.variables?.colors?.secondary || '#f8f8f8',
										borderRadius: p,
										'& .ss__load-more__progress__indicator__bar': {
											width: u ? `${(u.end / u.totalResults) * 100}%` : '',
											background: g || O?.variables?.colors?.primary || '#ccc',
											borderRadius: p,
											height: p,
										},
									},
									'& .ss__load-more__progress__text': { textAlign: 'center' },
								},
							},
						}),
					d = (0, l.PA)((u) => {
						const _ = (0, b.u)(),
							g = {
								loadMoreText: 'Load More',
								loadingLocation: 'button',
								loadingIcon: 'spinner',
								progressIndicatorWidth: '300px',
								progressIndicatorSize: '5px',
								treePath: (0, s.LU)(),
							},
							h = (0, P.v6)('loadMore', _, g, u),
							{
								pagination: O,
								controller: j,
								onClick: S,
								autoFetch: F,
								intersectionOffset: Z,
								loading: k,
								loadMoreText: w,
								hideProgressIndicator: x,
								hideProgressText: N,
								loadingLocation: L,
								loadingIcon: T,
								disableStyles: X,
								className: oe,
								internalClassName: $,
								treePath: H,
							} = h,
							{ overrideElement: G, shouldRenderDefault: J } = (0, A._)('loadMore', h);
						if (!J) return G;
						const D = O || j?.store?.pagination,
							I = typeof k == 'boolean' ? k : j?.store?.loading,
							Q = (I && L === 'button') || !D?.next,
							V = {
								button: {
									internalClassName: a()(
										'ss__load-more__button',
										{ 'ss__load-more__button--hidden': I && L === 'outside' },
										{ 'ss__load-more__button--disabled': Q }
									),
									...(0, E.s)({ disableStyles: X }),
									theme: h?.theme,
									treePath: H,
								},
								icon: { internalClassName: 'ss__load-more__icon', ...(0, E.s)({ disableStyles: X }), theme: h?.theme, treePath: H },
							};
						if (!D) return null;
						const q = (0, M.Z)({ ...h, pagination: D }, B),
							R = {};
						if (F) {
							const z = (0, c.li)(null);
							R.ref = z;
							const se = (0, C.v)(z, Z || '0px'),
								[re, ne] = (0, c.J0)(!0);
							I
								? ne(!0)
								: (0, W.d)(() => {
										ne(!1);
								  }, 500),
								se && D.next && !re && D.next.url.go({ history: 'replace' });
						}
						const ee = {
								loadMoreButton: { value: w, attributes: { 'aria-label': w } },
								progressText: { value: `You've viewed ${D?.end} of ${D?.totalResults} products` },
							},
							Y = o()(ee, h.lang || {}),
							te = (0, y.u)(Y, { pagination: D }, { activeBreakpoint: _?.activeBreakpoint });
						return D.totalResults
							? (0, t.Y)(n._, {
									children: (0, t.FD)('div', {
										...q,
										...R,
										className: a()('ss__load-more', { 'ss__load-more--loading': I }, { 'ss__load-more--autoFetch': F }, oe, $),
										children: [
											!F &&
												(0, t.FD)(t.FK, {
													children: [
														(0, t.FD)(K.$, {
															onClick: (z) => {
																D.next?.url.go({ history: 'replace' }), S && S(z);
															},
															...V.button,
															...te.loadMoreButton.attributes,
															children: [
																(0, t.Y)('span', { ...te.loadMoreButton.value, children: w }),
																T && I && L === 'button' ? (0, t.Y)(U.I, { ...V.icon, ...(typeof T == 'string' ? { icon: T } : T) }) : null,
															],
														}),
														T && I && L === 'outside' && (0, t.Y)(U.I, { ...V.icon, ...(typeof T == 'string' ? { icon: T } : T) }),
													],
												}),
											(!x || !N) &&
												(0, t.Y)('div', {
													className: 'ss__load-more__progress',
													children: (0, t.FD)(t.FK, {
														children: [
															!x &&
																(0, t.Y)('div', {
																	className: 'ss__load-more__progress__indicator',
																	children: (0, t.Y)('div', { className: 'ss__load-more__progress__indicator__bar' }),
																}),
															!N &&
																(0, t.Y)('div', {
																	'aria-atomic': 'true',
																	'aria-live': 'polite',
																	className: 'ss__load-more__progress__text',
																	...te.progressText?.all,
																}),
														],
													}),
												}),
										],
									}),
							  })
							: null;
					});
				e.d(i, ['e', 0, d]);
			},
			'./components/src/hooks/useA11y.tsx'(v, i, e) {
				'use strict';
				e.d(i, { iy: () => a });
				const t = 9,
					c = 27,
					r = 'ss-a11y',
					m =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function a(l, f, o, n) {
					const b = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${b}`)) {
						const s = document.createElement('style');
						(s.type = 'text/css'),
							(s.id = b),
							(s.innerHTML = `[${r}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(s);
					}
					l &&
						!l.attributes?.[r] &&
						(l.setAttribute(r, !0),
						l.setAttribute('tabIndex', `${f || 0}`),
						l.addEventListener('keydown', (s) => {
							(s.code === 'Space' || s.code === 'Enter') && l.click();
						}),
						o &&
							l.addEventListener('keydown', function (s) {
								const E = l.querySelectorAll(m),
									P = E[0],
									M = E[E.length - 1];
								if (s.keyCode == c) {
									l.focus(), n && n(s), s.preventDefault(), s.stopPropagation();
									return;
								}
								(s.key === 'Tab' || s.keyCode === t) &&
									(s.shiftKey
										? document.activeElement === P && (M.focus(), s.preventDefault())
										: document.activeElement === M && (P.focus(), s.preventDefault()));
							}));
				}
				e.d(i, ['DH', 0, m, 'aZ', 0, r]);
			},
			'./components/src/hooks/useFuncDebounce.tsx'(v, i, e) {
				'use strict';
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const c = (r, m) => {
					const a = (0, t.li)(r);
					(a.current = r),
						(0, t.vJ)(() => {
							const l = setTimeout(() => {
								a.current();
							}, m);
							return () => {
								clearTimeout(l);
							};
						}, [r, m]);
				};
				e.d(i, ['d', 0, c]);
			},
			'./components/src/hooks/useIntersection.tsx'(v, i, e) {
				'use strict';
				var t = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const c = (r, m = '0px', a = !1) => {
					const [l, f] = (0, t.J0)(!1);
					return (
						(0, t.vJ)(() => {
							const o = new IntersectionObserver(
								([n]) => {
									f(n.isIntersecting), a && n.isIntersecting && o.unobserve(r.current);
								},
								{ rootMargin: m }
							);
							return (
								r.current && o.observe(r.current),
								() => {
									o.unobserve(r.current);
								}
							);
						}, []),
						l
					);
				};
				e.d(i, ['v', 0, c]);
			},
			'./components/src/hooks/useLang.tsx'(v, i, e) {
				'use strict';
				const t = (c, r, m) => {
					const a = m ? { ...r, ...m } : r,
						l = {};
					return (
						Object.keys(c).forEach((f) => {
							const o = c && c[f],
								n = {};
							o &&
								(o?.value &&
									(typeof o.value == 'function'
										? (n.value = { 'ss-lang': f, dangerouslySetInnerHTML: { __html: o.value(a) } })
										: (n.value = { 'ss-lang': f, dangerouslySetInnerHTML: { __html: o.value } })),
								o?.attributes &&
									Object.keys(o?.attributes).length &&
									((n.attributes = { 'ss-lang': f }),
									o?.attributes?.['aria-label'] &&
										(typeof o.attributes?.['aria-label'] == 'function'
											? (n.attributes['aria-label'] = o.attributes['aria-label'](a))
											: (n.attributes['aria-label'] = o.attributes['aria-label'])),
									o?.attributes?.['aria-valuetext'] &&
										(typeof o.attributes?.['aria-valuetext'] == 'function'
											? (n.attributes['aria-valuetext'] = o.attributes['aria-valuetext'](a))
											: (n.attributes['aria-valuetext'] = o.attributes['aria-valuetext'])),
									o?.attributes?.title &&
										(typeof o.attributes?.title == 'function'
											? (n.attributes.title = o.attributes.title(a))
											: (n.attributes.title = o.attributes.title)),
									o?.attributes?.alt &&
										(typeof o.attributes?.alt == 'function' ? (n.attributes.alt = o.attributes.alt(a)) : (n.attributes.alt = o.attributes.alt)),
									o?.attributes?.placeholder &&
										(typeof o.attributes?.placeholder == 'function'
											? (n.attributes.placeholder = o.attributes.placeholder(a))
											: (n.attributes.placeholder = o.attributes.placeholder))),
								(n.all = { ...n.value, ...n.attributes, 'ss-lang': f })),
								(l[f] = n);
						}),
						l
					);
				};
				e.d(i, ['u', 0, t]);
			},
			'./components/src/utilities/componentArgs.ts'(v, i, e) {
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
				e.d(i, ['F', 0, t]);
			},
			'./components/src/utilities/defined.ts'(v, i, e) {
				'use strict';
				e.d(i, { s: () => t });
				function t(c) {
					const r = {};
					return (
						Object.keys(c).map((m) => {
							c[m] !== void 0 && (r[m] = c[m]);
						}),
						r
					);
				}
			},
			'./components/src/utilities/snapify.ts'(v, i, e) {
				'use strict';
				e.d(i, { p: () => K });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					c = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					r = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					m = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					a = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					l = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					f = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					o = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					n = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					b = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					s = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					E = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					P = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					M = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					C = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const y = {},
					A = { globals: { siteId: 'atkzs2' } };
				class K {
					static recommendation(u) {
						const _ = u.id;
						if (y[_]) return y[_];
						const p = (y[_] = W({ client: A, controller: u }));
						return (
							p.on('afterStore', async ({ controller: g }, h) => {
								g.log.debug('controller', g), g.log.debug('store', g.store.toJSON()), await h();
							}),
							p.init(),
							p
						);
					}
					static autocomplete(u) {
						const _ = u.id;
						if (y[_]) return y[_];
						const p = (y[_] = B({ client: A, controller: u }));
						return (
							p.on('afterStore', async ({ controller: g }, h) => {
								g.log.debug('controller', g), g.log.debug('store', g.store.toJSON()), await h();
							}),
							p.init(),
							p
						);
					}
					static search(u) {
						const _ = u.id;
						if (y[_]) return y[_];
						const p = (y[_] = U({ client: A, controller: u }));
						return (
							p.on('afterStore', async ({ controller: g }, h) => {
								g.log.debug('controller', g), g.log.debug('store', g.store.toJSON()), await h();
							}),
							p.init(),
							p
						);
					}
				}
				function U(d) {
					const u = new n.V(new s.E({ settings: { coreType: 'query', corePrefix: d.controller.id } }), b.X);
					return new c.Tp(d.controller, {
						client: new a.K(d.client.globals, d.client.config),
						store: new f.U(d.controller, { urlManager: u }),
						urlManager: u,
						eventManager: new E.E(),
						profiler: new P.U(),
						logger: new M.V(),
						tracker: new C.J(d.client.globals),
					});
				}
				function W(d) {
					const u = new n.V(new s.E(), b.X).detach(!0);
					return new m.c(d.controller, {
						client: new a.K(d.client.globals, d.client.config),
						store: new o.t(d.controller, { urlManager: u }),
						urlManager: u,
						eventManager: new E.E(),
						profiler: new P.U(),
						logger: new M.V(),
						tracker: new C.J(d.client.globals),
					});
				}
				function B(d) {
					const u = new n.V(new s.E(), b.X).detach();
					return new r.Z(d.controller, {
						client: new a.K(d.client.globals, d.client.config),
						store: new l.Y(d.controller, { urlManager: u }),
						urlManager: u,
						eventManager: new E.E(),
						profiler: new P.U(),
						logger: new M.V(),
						tracker: new C.J(d.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(v, i, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const r = 'prism-block',
					m = (a) => {
						const l = (0, c.li)(null);
						return (
							(0, c.vJ)(() => {
								l.current && a.className?.includes('lang-') && !a.className?.includes(r) && window?.Prism?.highlightElement(l.current);
							}, [a.className, a.children, l]),
							(0, t.Y)('code', { ...a, ref: l, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(i, ['Z', 0, m]);
			},
			'../../node_modules/memoizerific sync recursive'(v) {
				function i(e) {
					const t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(i.keys = () => []), (i.resolve = i), (i.id = '../../node_modules/memoizerific sync recursive'), (v.exports = i);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-LoadMore-LoadMore-stories.ba1f264c.iframe.bundle.js.map
