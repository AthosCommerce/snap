(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9983],
		{
			'./components/src/components/Molecules/LoadMore/LoadMore.stories.tsx'(v, a, e) {
				'use strict';
				e.r(a), e.d(a, { Default: () => s, __namedExportsOrder: () => E, default: () => f });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					n = e('./components/src/components/Molecules/LoadMore/LoadMore.tsx'),
					u = e('./components/src/utilities/storybook.tsx'),
					r = e('./components/src/utilities/componentArgs.ts'),
					t = e('./components/src/components/Atoms/Icon/paths.tsx'),
					l = e('./components/src/utilities/snapify.ts');
				const b =
						"# LoadMore\n\nRenders a \"Load More\" button that displays the next page of results. Recommended to be used with SearchController's `infinite` config\n\n## Sub-components\n- Button\n\n## Usage\n\n### pagination / controller\nThe required `pagination` (or `controller`) prop specifies a reference to the pagination store object.\n\n```tsx\n<LoadMore pagination={controller.store.pagination} />\n```\n\n```tsx\n<LoadMore controller={controller} />\n```\n\n### autoFetch\nThe `autoFetch` prop will not render a \"Show More\" button and instead fetch the next page of results when the component appears in the viewport. Recommended to place underneath Results to allow for infinite scrolling. \n\n```tsx\n<LoadMore pagination={controller.store.pagination} autoFetch={true} />\n```\n\nCan be used in combination with `hideProgressIndicator` and `hideProgressText` to not display anything and have infinite scrolling still function:\n\n```tsx\n<LoadMore pagination={controller.store.pagination} autoFetch={true} hideProgressIndicator={true} hideProgressText={true} />\n```\n\n### intersectionOffset + autoFetch\nRequires `autoFetch` prop to be `true`. The `intersectionOffset` prop defines the IntersectionObserver's `rootMargin` value. This is an offset added to each side of the component's bounding box to create the final root bounds. These bounds then determine when the component is in the viewport and the next results are fetched. Default: `0px`\n\n```tsx\n<LoadMore pagination={controller.store.pagination} autoFetch={true} intersectionOffset={'40px'} />\n```\n\n### loading\nThe `loading` prop is not required if the `controller` prop is provided.\n\nIf the `pagination` prop is used, the `loading` prop should contain a value from `controller.store.loading` to allow for the \"Load More\" button to be disabled and the spinner icon visible while fetching results.\n\n```tsx\n<LoadMore pagination={controller.store.pagination} loading={controller.store.loading} />\n```\n\n### loadMoreText\nThe `loadMoreText` prop sets the button text. Default value: \"Load More\"\n\n```tsx\n<LoadMore pagination={controller.store.pagination} loadMoreText={'Load More'} />\n```\n\n### color\nThe `color` prop specifies the color of the indicator active state.\n\n```tsx\n<LoadMore pagination={controller.store.pagination} color={'#ffff00'} />\n```\n\n### backgroundColor\nThe `backgroundColor` prop specifies the background color of the indicator.\n\n```tsx\n<LoadMore pagination={controller.store.pagination} backgroundColor={'#eeeeee'} />\n```\n\n### progressIndicatorWidth\nThe `progressIndicatorWidth` prop sets the progress indicator width. Recommended units: `px`, `rem`, `em`, `vw`.\n\n```tsx\n<LoadMore pagination={controller.store.pagination} progressIndicatorWidth={'300px'} />\n```\n\n### progressIndicatorSize\nThe `progressIndicatorSize` prop sets the progress indicator size. Recommended units: `px`, `rem`, `em`, `vw`. Unsupported unit: `%` not recommended. \n\n```tsx\n<LoadMore pagination={controller.store.pagination} progressIndicatorSize={'5px'} />\n```\n\n### hideProgressIndicator\nThe `hideProgressIndicator` prop hides the progress indicator.\n\n```tsx\n<LoadMore pagination={controller.store.pagination} hideProgressIndicator={true} />\n```\n\n### hideProgressText\nThe `hideProgressText` prop hides the progress text.\n\n```tsx\n<LoadMore pagination={controller.store.pagination} hideProgressText={true} />\n```\n\n### hideProgressIndicator + hideProgressText\nWhen both `hideProgressIndicator` and `hideProgressText` props are `true` only the button will be displayed.\n\n```tsx\n<LoadMore pagination={controller.store.pagination} hideProgressIndicator={true} hideProgressText={true} />\n```\n\n### loadingIcon\nThe `loadingIcon` prop defines the icon used when loading. Default: `spinner`\n\n```tsx\n<LoadMore pagination={controller.store.pagination} loadingIcon={'spinner'} />\n```\n\n### loadingLocation\nThe `loadingLocation` prop defines the location of the loading icon. Default: `button` will be displayed within the \"Load More\" button. Alternative value of `outside` will display the loading icon in place of the button.\n\n### onClick\nThe `onClick` prop allows for a custom callback function for when the button is clicked.\n\n```tsx\n<LoadMore pagination={controller.store.pagination} onClick={(e)=>{console.log(e)}} />\n```\n",
					f = {
						title: 'Molecules/LoadMore',
						component: n.e,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, o.FD)('div', {
										children: [(0, o.Y)(i.oz, { options: { overrides: { code: u.Z } }, children: b }), (0, o.Y)(i.uY, { story: i.h1 })],
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
					h = l.p.search({
						id: 'LoadMore',
						globals: { siteId: 'atkzs2', filters: [{ type: 'value', field: 'color_family', value: 'Beige', background: !0 }] },
					}),
					s = (P, { loaded: { controller: y } }) => (0, o.Y)(n.e, { ...P, controller: y });
				(s.loaders = [async () => (await h.search(), { controller: h })]),
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
			'./components/src/components/Atoms/Button/Button.tsx'(v, a, e) {
				'use strict';
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = e('../../node_modules/classnames/index.js'),
					u = e.n(n),
					r = e('../../node_modules/mobx-react-lite/es/index.js'),
					t = e('./components/src/providers/cache.tsx'),
					l = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					b = e('./components/src/providers/treePath.tsx'),
					f = e('./components/src/hooks/useA11y.tsx'),
					h = e('./components/src/utilities/cloneWithProps.tsx'),
					s = e('./components/src/utilities/defined.ts'),
					E = e('./components/src/utilities/mergeProps.ts'),
					P = e('./components/src/utilities/mergeStyles.ts'),
					y = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					C = e('./components/src/hooks/useLang.tsx'),
					M = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					A = e('../../node_modules/deepmerge/dist/cjs.js'),
					K = e.n(A);
				const U = ({ native: R, color: c, backgroundColor: d, borderColor: _, theme: m }) =>
						R
							? (0, i.AH)({})
							: (0, i.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: c || m?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: d || '#fff',
									border: `1px solid ${_ || c || m?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  }),
					W = (0, r.PA)((R) => {
						const c = (0, l.u)(),
							_ = { disableA11y: !1, treePath: (0, b.LU)() },
							m = (0, E.v6)('button', c, _, R),
							{
								content: p,
								children: g,
								disabled: O,
								native: j,
								onClick: S,
								disableA11y: F,
								disableStyles: Z,
								className: k,
								internalClassName: N,
								icon: x,
								lang: V,
								treePath: L,
								style: T,
								styleScript: X,
								themeStyleScript: oe,
								...H
							} = m,
							{ overrideElement: J, shouldRenderDefault: G } = (0, M._)('button', m);
						if (!G) return J;
						const $ = { icon: { internalClassName: 'ss__button__icon', ...(0, s.s)({ disableStyles: Z }), theme: m?.theme, treePath: L } },
							I = {
								...(0, P.Z)(m, U),
								className: u()('ss__button', { 'ss__button--native': j, 'ss__button--disabled': O }, k, N),
								disabled: O,
								onClick: (w) => !O && S && S(w),
								...H,
							},
							Q = { ref: (w) => (0, f.iy)(w) },
							Y = {},
							q = K()(Y, V || {}),
							B = (0, C.u)(q, {}),
							ee = !!H.dangerouslySetInnerHTML;
						return p || g || x || V?.button?.value || ee
							? (0, o.Y)(t._, {
									children: j
										? (0, o.FD)('button', {
												...I,
												children: [
													(0, o.FD)('span', {
														className: 'ss__button__content',
														...B.button?.all,
														children: [(0, h.Y)(p, { treePath: L }), (0, h.Y)(g, { treePath: L })],
													}),
													x && (0, o.Y)(y.I, { ...$.icon, ...(typeof x == 'string' ? { icon: x } : x) }),
												],
										  })
										: (0, o.FD)('div', {
												...(F ? {} : Q),
												role: 'button',
												'aria-disabled': O,
												...I,
												...B.button?.attributes,
												children: [
													p || g || B.button?.value
														? (0, o.FD)('span', {
																className: 'ss__button__content',
																...B.button?.value,
																children: [(0, h.Y)(p, { treePath: L }), (0, h.Y)(g, { treePath: L })],
														  })
														: void 0,
													x && (0, o.Y)(y.I, { ...$.icon, ...(typeof x == 'string' ? { icon: x } : x) }),
												],
										  }),
							  })
							: null;
					});
				e.d(a, ['$', 0, W]);
			},
			'./components/src/components/Molecules/LoadMore/LoadMore.tsx'(v, a, e) {
				'use strict';
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					n = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					u = e('../../node_modules/classnames/index.js'),
					r = e.n(u),
					t = e('../../node_modules/mobx-react-lite/es/index.js'),
					l = e('../../node_modules/deepmerge/dist/cjs.js'),
					b = e.n(l),
					f = e('./components/src/providers/cache.tsx'),
					h = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					s = e('./components/src/providers/treePath.tsx'),
					E = e('./components/src/utilities/defined.ts'),
					P = e('./components/src/utilities/mergeProps.ts'),
					y = e('./components/src/utilities/mergeStyles.ts'),
					C = e('./components/src/hooks/useIntersection.tsx'),
					M = e('./components/src/hooks/useLang.tsx'),
					A = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					K = e('./components/src/components/Atoms/Button/Button.tsx'),
					U = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					W = e('./components/src/hooks/useFuncDebounce.tsx');
				const R = ({ pagination: d, progressIndicatorWidth: _, progressIndicatorSize: m, color: p, backgroundColor: g, theme: O }) =>
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
										background: g || O?.variables?.colors?.secondary || '#f8f8f8',
										borderRadius: m,
										'& .ss__load-more__progress__indicator__bar': {
											width: d ? `${(d.end / d.totalResults) * 100}%` : '',
											background: p || O?.variables?.colors?.primary || '#ccc',
											borderRadius: m,
											height: m,
										},
									},
									'& .ss__load-more__progress__text': { textAlign: 'center' },
								},
							},
						}),
					c = (0, t.PA)((d) => {
						const _ = (0, h.u)(),
							p = {
								loadMoreText: 'Load More',
								loadingLocation: 'button',
								loadingIcon: 'spinner',
								progressIndicatorWidth: '300px',
								progressIndicatorSize: '5px',
								treePath: (0, s.LU)(),
							},
							g = (0, P.v6)('loadMore', _, p, d),
							{
								pagination: O,
								controller: j,
								onClick: S,
								autoFetch: F,
								intersectionOffset: Z,
								loading: k,
								loadMoreText: N,
								hideProgressIndicator: x,
								hideProgressText: V,
								loadingLocation: L,
								loadingIcon: T,
								disableStyles: X,
								className: oe,
								internalClassName: H,
								treePath: J,
							} = g,
							{ overrideElement: G, shouldRenderDefault: $ } = (0, A._)('loadMore', g);
						if (!$) return G;
						const D = O || j?.store?.pagination,
							I = typeof k == 'boolean' ? k : j?.store?.loading,
							Q = (I && L === 'button') || !D?.next,
							Y = {
								button: {
									internalClassName: r()(
										'ss__load-more__button',
										{ 'ss__load-more__button--hidden': I && L === 'outside' },
										{ 'ss__load-more__button--disabled': Q }
									),
									...(0, E.s)({ disableStyles: X }),
									theme: g?.theme,
									treePath: J,
								},
								icon: { internalClassName: 'ss__load-more__icon', ...(0, E.s)({ disableStyles: X }), theme: g?.theme, treePath: J },
							};
						if (!D) return null;
						const q = (0, y.Z)({ ...g, pagination: D }, R),
							B = {};
						if (F) {
							const z = (0, i.li)(null);
							B.ref = z;
							const se = (0, C.v)(z, Z || '0px'),
								[re, ne] = (0, i.J0)(!0);
							I
								? ne(!0)
								: (0, W.d)(() => {
										ne(!1);
								  }, 500),
								se && D.next && !re && D.next.url.go({ history: 'replace' });
						}
						const ee = {
								loadMoreButton: { value: N, attributes: { 'aria-label': N } },
								progressText: { value: `You've viewed ${D?.end} of ${D?.totalResults} products` },
							},
							w = b()(ee, g.lang || {}),
							te = (0, M.u)(w, { pagination: D });
						return D.totalResults
							? (0, o.Y)(f._, {
									children: (0, o.FD)('div', {
										...q,
										...B,
										className: r()('ss__load-more', { 'ss__load-more--loading': I }, { 'ss__load-more--autoFetch': F }, oe, H),
										children: [
											!F &&
												(0, o.FD)(o.FK, {
													children: [
														(0, o.FD)(K.$, {
															onClick: (z) => {
																D.next?.url.go({ history: 'replace' }), S && S(z);
															},
															...Y.button,
															...te.loadMoreButton.attributes,
															children: [
																(0, o.Y)('span', { ...te.loadMoreButton.value, children: N }),
																T && I && L === 'button' ? (0, o.Y)(U.I, { ...Y.icon, ...(typeof T == 'string' ? { icon: T } : T) }) : null,
															],
														}),
														T && I && L === 'outside' && (0, o.Y)(U.I, { ...Y.icon, ...(typeof T == 'string' ? { icon: T } : T) }),
													],
												}),
											(!x || !V) &&
												(0, o.Y)('div', {
													className: 'ss__load-more__progress',
													children: (0, o.FD)(o.FK, {
														children: [
															!x &&
																(0, o.Y)('div', {
																	className: 'ss__load-more__progress__indicator',
																	children: (0, o.Y)('div', { className: 'ss__load-more__progress__indicator__bar' }),
																}),
															!V &&
																(0, o.Y)('div', {
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
				e.d(a, ['e', 0, c]);
			},
			'./components/src/hooks/useA11y.tsx'(v, a, e) {
				'use strict';
				e.d(a, { iy: () => r });
				const o = 9,
					i = 27,
					n = 'ss-a11y',
					u =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function r(t, l, b, f) {
					const h = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${h}`)) {
						const s = document.createElement('style');
						(s.type = 'text/css'),
							(s.id = h),
							(s.innerHTML = `[${n}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(s);
					}
					t &&
						!t.attributes?.[n] &&
						(t.setAttribute(n, !0),
						t.setAttribute('tabIndex', `${l || 0}`),
						t.addEventListener('keydown', (s) => {
							(s.code === 'Space' || s.code === 'Enter') && t.click();
						}),
						b &&
							t.addEventListener('keydown', function (s) {
								const E = t.querySelectorAll(u),
									P = E[0],
									y = E[E.length - 1];
								if (s.keyCode == i) {
									t.focus(), f && f(s), s.preventDefault(), s.stopPropagation();
									return;
								}
								(s.key === 'Tab' || s.keyCode === o) &&
									(s.shiftKey
										? document.activeElement === P && (y.focus(), s.preventDefault())
										: document.activeElement === y && (P.focus(), s.preventDefault()));
							}));
				}
				e.d(a, ['DH', 0, u, 'aZ', 0, n]);
			},
			'./components/src/hooks/useFuncDebounce.tsx'(v, a, e) {
				'use strict';
				var o = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const i = (n, u) => {
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
				e.d(a, ['d', 0, i]);
			},
			'./components/src/hooks/useIntersection.tsx'(v, a, e) {
				'use strict';
				var o = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const i = (n, u = '0px', r = !1) => {
					const [t, l] = (0, o.J0)(!1);
					return (
						(0, o.vJ)(() => {
							const b = new IntersectionObserver(
								([f]) => {
									l(f.isIntersecting), r && f.isIntersecting && b.unobserve(n.current);
								},
								{ rootMargin: u }
							);
							return (
								n.current && b.observe(n.current),
								() => {
									b.unobserve(n.current);
								}
							);
						}, []),
						t
					);
				};
				e.d(a, ['v', 0, i]);
			},
			'./components/src/hooks/useLang.tsx'(v, a, e) {
				'use strict';
				const o = (i, n) => {
					const u = {};
					return (
						Object.keys(i).forEach((r) => {
							const t = i && i[r],
								l = {};
							t &&
								(t?.value &&
									(typeof t.value == 'function'
										? (l.value = { 'ss-lang': r, dangerouslySetInnerHTML: { __html: t.value(n) } })
										: (l.value = { 'ss-lang': r, dangerouslySetInnerHTML: { __html: t.value } })),
								t?.attributes &&
									Object.keys(t?.attributes).length &&
									((l.attributes = { 'ss-lang': r }),
									t?.attributes?.['aria-label'] &&
										(typeof t.attributes?.['aria-label'] == 'function'
											? (l.attributes['aria-label'] = t.attributes['aria-label'](n))
											: (l.attributes['aria-label'] = t.attributes['aria-label'])),
									t?.attributes?.['aria-valuetext'] &&
										(typeof t.attributes?.['aria-valuetext'] == 'function'
											? (l.attributes['aria-valuetext'] = t.attributes['aria-valuetext'](n))
											: (l.attributes['aria-valuetext'] = t.attributes['aria-valuetext'])),
									t?.attributes?.title &&
										(typeof t.attributes?.title == 'function'
											? (l.attributes.title = t.attributes.title(n))
											: (l.attributes.title = t.attributes.title)),
									t?.attributes?.alt &&
										(typeof t.attributes?.alt == 'function' ? (l.attributes.alt = t.attributes.alt(n)) : (l.attributes.alt = t.attributes.alt)),
									t?.attributes?.placeholder &&
										(typeof t.attributes?.placeholder == 'function'
											? (l.attributes.placeholder = t.attributes.placeholder(n))
											: (l.attributes.placeholder = t.attributes.placeholder))),
								(l.all = { ...l.value, ...l.attributes, 'ss-lang': r })),
								(u[r] = l);
						}),
						u
					);
				};
				e.d(a, ['u', 0, o]);
			},
			'./components/src/utilities/componentArgs.ts'(v, a, e) {
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
			'./components/src/utilities/defined.ts'(v, a, e) {
				'use strict';
				e.d(a, { s: () => o });
				function o(i) {
					const n = {};
					return (
						Object.keys(i).map((u) => {
							i[u] !== void 0 && (n[u] = i[u]);
						}),
						n
					);
				}
			},
			'./components/src/utilities/snapify.ts'(v, a, e) {
				'use strict';
				e.d(a, { p: () => K });
				var o = e('../../node_modules/mobx/dist/mobx.esm.js'),
					i = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					n = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					u = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					r = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					t = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					l = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					b = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					f = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					h = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					s = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					E = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					P = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					y = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					C = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, o.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const M = {},
					A = { globals: { siteId: 'atkzs2' } };
				class K {
					static recommendation(d) {
						const _ = d.id;
						if (M[_]) return M[_];
						const m = (M[_] = W({ client: A, controller: d }));
						return (
							m.on('afterStore', async ({ controller: p }, g) => {
								p.log.debug('controller', p), p.log.debug('store', p.store.toJSON()), await g();
							}),
							m.init(),
							m
						);
					}
					static autocomplete(d) {
						const _ = d.id;
						if (M[_]) return M[_];
						const m = (M[_] = R({ client: A, controller: d }));
						return (
							m.on('afterStore', async ({ controller: p }, g) => {
								p.log.debug('controller', p), p.log.debug('store', p.store.toJSON()), await g();
							}),
							m.init(),
							m
						);
					}
					static search(d) {
						const _ = d.id;
						if (M[_]) return M[_];
						const m = (M[_] = U({ client: A, controller: d }));
						return (
							m.on('afterStore', async ({ controller: p }, g) => {
								p.log.debug('controller', p), p.log.debug('store', p.store.toJSON()), await g();
							}),
							m.init(),
							m
						);
					}
				}
				function U(c) {
					const d = new f.V(new s.E({ settings: { coreType: 'query', corePrefix: c.controller.id } }), h.X);
					return new i.Tp(c.controller, {
						client: new r.K(c.client.globals, c.client.config),
						store: new l.U(c.controller, { urlManager: d }),
						urlManager: d,
						eventManager: new E.E(),
						profiler: new P.U(),
						logger: new y.V(),
						tracker: new C.J(c.client.globals),
					});
				}
				function W(c) {
					const d = new f.V(new s.E(), h.X).detach(!0);
					return new u.c(c.controller, {
						client: new r.K(c.client.globals, c.client.config),
						store: new b.t(c.controller, { urlManager: d }),
						urlManager: d,
						eventManager: new E.E(),
						profiler: new P.U(),
						logger: new y.V(),
						tracker: new C.J(c.client.globals),
					});
				}
				function R(c) {
					const d = new f.V(new s.E(), h.X).detach();
					return new n.Z(c.controller, {
						client: new r.K(c.client.globals, c.client.config),
						store: new t.Y(c.controller, { urlManager: d }),
						urlManager: d,
						eventManager: new E.E(),
						profiler: new P.U(),
						logger: new y.V(),
						tracker: new C.J(c.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(v, a, e) {
				'use strict';
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const n = 'prism-block',
					u = (r) => {
						const t = (0, i.li)(null);
						return (
							(0, i.vJ)(() => {
								t.current && r.className?.includes('lang-') && !r.className?.includes(n) && window?.Prism?.highlightElement(t.current);
							}, [r.className, r.children, t]),
							(0, o.Y)('code', { ...r, ref: t, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(a, ['Z', 0, u]);
			},
			'../../node_modules/memoizerific sync recursive'(v) {
				function a(e) {
					const o = new Error("Cannot find module '" + e + "'");
					throw ((o.code = 'MODULE_NOT_FOUND'), o);
				}
				(a.keys = () => []), (a.resolve = a), (a.id = '../../node_modules/memoizerific sync recursive'), (v.exports = a);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-LoadMore-LoadMore-stories.524fd422.iframe.bundle.js.map
