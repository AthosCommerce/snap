(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9769],
		{
			'./components/src/components/Templates/AutocompleteModal/AutocompleteModal.stories.tsx'(S, l, e) {
				'use strict';
				e.r(l), e.d(l, { Default: () => u, __namedExportsOrder: () => f, default: () => P });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					M = e('./components/src/components/Templates/AutocompleteModal/AutocompleteModal.tsx'),
					b = e('./components/src/utilities/storybook.tsx'),
					i = e('./components/src/utilities/componentArgs.ts'),
					y = e('./components/src/utilities/snapify.ts');
				const B =
					"# AutocompleteModal\n\nRenders an autocomplete modal that binds to an `<input>` element.\n\nThe AutocompleteModal component is very similar to the Autocomplete component in functionality, however the main difference is that the AutocompleteModal components layout is determined by the layout prop, which specifies what child components render and where.\n\n## Components Used\n- autocompleteLayout\n- SearchInput\n- Modal\n\n## Usage\n\n### input\nThe required `input` prop expects either:\n\n- a string CSS selector that targets `<input>` element(s) to bind to\n\n- an `<input>` element to bind to\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} />\n```\n\n### controller\nThe required `controller` prop specifies a reference to the autocomplete controller.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} />\n```\n\n### layout\nThe `layout` prop is used to specify which child components render and where. It accepts either a **prebuilt layout string** or an **array of module names**.\n\n#### Prebuilt Layouts\n\nInstead of constructing a custom module array, you can pass one of the following string values:\n\n| Prebuilt | Expands To | Description |\n|---|---|---|\n| `'terms'` | `[['termsList'], ['no-results'], ['_', 'button.see-more']]` | Terms list only \u2014 no product results grid |\n| `'mobile'` | `[['termsList'], ['content'], ['_', 'button.see-more']]` | Compact view with terms and a small results section |\n| `'tablet'` | `[['c1', 'c3']]` | Two-column layout (terms + results, no facets) |\n| `'desktop'` | `[['c1', 'c2', 'c3']]` | Full three-column layout (terms, facets, results) |\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} layout={'terms'} />\n```\n\n#### Custom Layout Arrays\n\nFor full control, pass a 2-D array of module names. The order of these module names determines the order in which they will be rendered. Additionally you can pass arrays of modules to the array to specify new rows in the display.\n\nThere are also a few special module names - `c1`, `c2`, `c3`, `c4`, & `_` \n\nAll of the `cx` modules represent Columns which also have their own layout array by default, and can be overwrote via their own layout props. IE - `c1` module can be overwrote via the `column1` prop. \n\nThe `_` module is used a seperator module to center|left|right justify the other elements in the layout.\n\navailable modules to use in the layout are \n\n`c1`, `c2`, `c3`, `c4`,`TermsList`, `Terms.history`, `Terms.trending`, `Terms.suggestions`, `Facets`, `FacetsHorizontal`, `Button.see-more`, `Content`, `_`, `Banner.left`, `Banner.banner`, `Banner.footer`, `Banner.header`.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} layout={[['c1','c2','c3']]}/>\n```\n\n### column1\nThe `column1` prop specifies the layout to render in the `c1` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `['TermsList']`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} column1={{\n    width: '150px',\n    layout: ['Terms.history', 'Terms.trending']\n}}/>\n```\n\n### column2\nThe `column2` prop specifies a layout array to render in the `c2` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `['Facets']`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} column2={{\n    width: '150px',\n    layout: ['Facets']\n}}/>\n```\n\n### column3\nThe `column3` prop specifies a layout array to render in the `c3` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `[['Content'], ['_', 'Button.see-more']]`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} column3={{\n    width: '150px',\n    layout: [['Content', ['_', 'Button.see-more', '_']]]\n}}/>\n```\n\n### column4\nThe `column4` prop specifies a layout array to render in the `c4` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} column4={{\nwidth: '150px',\nlayout: ['Facets']\n}}/>\n```\n\n### buttonSelector\nThe `buttonSelector` prop defines a CSS selector for the element that triggers the Modal to open. By default, it uses the selector provided in the `input` prop.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} buttonSelector={\".openSearchButton\"} />\n```\n\n### renderInput\nThe `renderInput` prop specifies whether the Search Input should be rendered. \n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} renderInput={false} />\n```\n\n### width\nThe `width` prop specifies a width for the overall component. The default value is '100%'.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} width=\"800px\" />\n```\n\n### excludeBanners\nThe `excludeBanners` prop specifies if the Autocomplete should automatically include banners. \n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} excludeBanners={true} />\n```\n\n### facetsTitle\nThe `facetsTitle` prop will display the given text above the facets area.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} facetsTitle={'Facets'} />\n```\n\n### contentTitle\nThe `contentTitle` prop will display the given text above the content area.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} contentTitle={'Search Results'} />\n```\n\n### overlayColor \nThe `overlayColor` prop specifies the color of the overlay.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} overlayColor={'rgba(0,0,0,0.8)'} />\n```\n";
				var x = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const P = {
						title: 'Templates/AutocompleteModal',
						component: M.c,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(m.oz, { options: { overrides: { code: b.Z } }, children: B }), (0, t.Y)(m.uY, { story: m.h1 })],
									}),
							},
						},
						decorators: [
							(g) =>
								(0, t.FD)('div', {
									style: { maxWidth: '1200px', position: 'relative' },
									children: [
										(0, t.Y)('input', {
											type: 'text',
											id: 'searchInput',
											placeholder: 'try me!',
											autoComplete: 'off',
											style: { width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #ebebeb' },
										}),
										(0, t.FD)('span', {
											style: { margin: '15px', textAlign: 'center', display: 'block' },
											children: ['Storybook bug: if no autocomplete renders. please refresh the page.', ' '],
										}),
										(0, t.Y)(g, {}),
									],
								}),
						],
						argTypes: {
							buttonSelector: {
								description: 'Modal button selector. (defaults to input)',
								table: { category: 'Templates Legal', type: { summary: 'string, jsx' } },
								control: { type: 'text' },
							},
							renderInput: {
								defaultValue: !0,
								description: 'render a second input inside autocomplete window that gets auto focused on open.',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
								control: { type: 'boolean' },
							},
							controller: {
								description: 'Autocomplete controller reference',
								type: { required: !0 },
								table: { type: { summary: 'Autocomplete controller object' } },
								control: { type: 'none' },
							},
							input: {
								description: 'input element reference',
								type: { required: !0 },
								table: { type: { summary: 'Element or String as CSS Selector' } },
								control: { type: 'none' },
							},
							layout: {
								description: 'array of modules to render in specified layout',
								table: {
									category: 'Templates Legal',
									type: {
										summary:
											"['c1' | 'c2' | 'c3' | 'c4' | 'Terms' | 'HistoryTerms' | 'TrendingTerms'| 'SuggestedTerms'| 'Facets' | 'FacetsHorizontal' | 'SeeMore' | 'Content' | '_' | 'Banner.left' | 'Banner.banner' | 'Banner.footer' | 'Banner.header']",
									},
									defaultValue: { summary: "[['button.see-more'],['termsList'], ['content']]" },
								},
								control: 'none',
							},
							column1: {
								description: 'object containing width - the specified width of the column and layout - array of modules to render in the "c1" layout',
								table: {
									category: 'Templates Legal',
									type: {
										summary:
											"{width: '150px', layout: ['Terms' | 'HistoryTerms' | 'TrendingTerms'| 'SuggestedTerms'| 'Facets' | 'FacetsHorizontal' | 'SeeMore' | 'Content' | '_' | 'Banner.left' | 'Banner.banner' | 'Banner.footer' | 'Banner.header']}",
									},
									defaultValue: {
										summary: `{
                    layout: ['Terms'],
                    width: '150px'
                }`,
									},
								},
								control: 'none',
							},
							column2: {
								description: 'object containing width - the specified width of the column and layout - array of modules to render in the "c2" layout',
								table: {
									category: 'Templates Legal',
									type: {
										summary:
											"{width: '150px', layout: ['Terms' | 'HistoryTerms' | 'TrendingTerms'| 'SuggestedTerms'| 'Facets' | 'FacetsHorizontal' | 'SeeMore' | 'Content' | '_' | 'Banner.left' | 'Banner.banner' | 'Banner.footer' | 'Banner.header']}",
									},
									defaultValue: {
										summary: `{
                    layout: ['Facets'],
                    width: '150px'
                }`,
									},
								},
								control: 'none',
							},
							column3: {
								description: 'object containing width - the specified width of the column and layout - array of modules to render in the "c3" layout',
								table: {
									category: 'Templates Legal',
									type: {
										summary:
											"{width: '150px', layout: ['Terms' | 'HistoryTerms' | 'TrendingTerms'| 'SuggestedTerms'| 'Facets' | 'FacetsHorizontal' | 'SeeMore' | 'Content' | '_' | 'Banner.left' | 'Banner.banner' | 'Banner.footer' | 'Banner.header']}",
									},
									defaultValue: {
										summary: `{
                    layout: [['Content'], ['_', 'SeeMore']],
                    width: 'auto'
                }`,
									},
								},
								control: 'none',
							},
							column4: {
								description: 'object containing width - the specified width of the column and layout - array of modules to render in the "c4" layout',
								table: {
									category: 'Templates Legal',
									type: {
										summary:
											"{width: '150px', layout: ['Terms' | 'HistoryTerms' | 'TrendingTerms'| 'SuggestedTerms'| 'Facets' | 'FacetsHorizontal' | 'SeeMore' | 'Content' | '_' | 'Banner.left' | 'Banner.banner' | 'Banner.footer' | 'Banner.header']}",
									},
								},
								control: 'none',
							},
							width: {
								defaultValue: '500px',
								description: 'Change width of the component',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '500px' } },
								control: { type: 'text' },
							},
							height: {
								description: 'set the height of the component',
								table: { category: 'Templates Legal', type: { summary: 'string' } },
								control: { type: 'text' },
							},
							excludeBanners: {
								defaultValue: !1,
								description: 'automatically add merchandising banners',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							facetsTitle: {
								defaultValue: '',
								description: 'Change facets header title',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '' } },
								control: { type: 'text' },
							},
							contentTitle: {
								defaultValue: '',
								description: 'Change content header title',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '' } },
								control: { type: 'text' },
							},
							overlayColor: {
								description: 'specifies the color of the overlay',
								defaultValue: 'rgba(0, 0, 0, 0.8)',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: 'rgba(0, 0, 0, 0.8)' } },
								control: { type: 'color' },
							},
							resultComponent: {
								description: 'Custom result component for the autocomplete',
								table: { category: 'Templates Legal', type: { summary: 'JSX.Element' } },
								control: { type: 'object' },
							},
							...i.F,
						},
					},
					A = y.p.autocomplete({
						id: 'AutocompleteModal',
						selector: '#searchInput',
						globals: { siteId: 'atkzs2' },
						settings: { trending: { limit: 5 } },
					}),
					u = (g, { loaded: { controller: v } }) => {
						const [d, s] = (0, x.J0)(!1),
							w = [
								{ active: d === 'dress', preview: () => s('dress'), value: 'dress', url: { href: '#' } },
								{ active: d === 'shirt', preview: () => s('shirt'), value: 'shirt', url: { href: '#' } },
								{ active: d === 'shoes', preview: () => s('shoes'), value: 'shoes', url: { href: '#' } },
								{ active: d === 'hat', preview: () => s('hat'), value: 'hat', url: { href: '#' } },
								{ active: d === 'pants', preview: () => s('pants'), value: 'pants', url: { href: '#' } },
								{ active: d === 'socks', preview: () => s('socks'), value: 'socks', url: { href: '#' } },
							];
						v.store.history = w;
						const [L, O] = (0, x.J0)(!1);
						return (
							(0, x.vJ)(() => {
								document.querySelector('#searchInput') && O(!0);
							}, []),
							L ? (0, t.Y)(M.c, { ...g, controller: v, input: v?.config.selector }) : (0, t.Y)(t.FK, {})
						);
					};
				(u.loaders = [async () => ({ controller: await A })]),
					(u.parameters = {
						...u.parameters,
						docs: {
							...u.parameters?.docs,
							source: {
								originalSource: `(args: AutocompleteModalProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: AutocompleteController;
  };
}) => {
  const [termState, setTermState] = useState(false);
  const mockTerms: AutocompleteTermStore = [{
    active: termState === 'dress',
    preview: () => setTermState('dress'),
    value: 'dress',
    url: {
      href: '#'
    } as UrlManager
  }, {
    active: termState === 'shirt',
    preview: () => setTermState('shirt'),
    value: 'shirt',
    url: {
      href: '#'
    } as UrlManager
  }, {
    active: termState === 'shoes',
    preview: () => setTermState('shoes'),
    value: 'shoes',
    url: {
      href: '#'
    } as UrlManager
  }, {
    active: termState === 'hat',
    preview: () => setTermState('hat'),
    value: 'hat',
    url: {
      href: '#'
    } as UrlManager
  }, {
    active: termState === 'pants',
    preview: () => setTermState('pants'),
    value: 'pants',
    url: {
      href: '#'
    } as UrlManager
  }, {
    active: termState === 'socks',
    preview: () => setTermState('socks'),
    value: 'socks',
    url: {
      href: '#'
    } as UrlManager
  }];
  controller.store.history = mockTerms;
  const [inputFound, setInputFound] = useState(false);
  useEffect(() => {
    if (document.querySelector('#searchInput')) {
      setInputFound(true);
    }
  }, []);
  return inputFound ? <AutocompleteModal {...args} controller={controller} input={controller?.config.selector} /> : <></>;
}`,
								...u.parameters?.docs?.source,
							},
						},
					});
				const f = ['Default'];
			},
			'./components/src/components/Molecules/Modal/Modal.tsx'(S, l, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					M = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					b = e('../../node_modules/classnames/index.js'),
					i = e.n(b),
					y = e('../../node_modules/mobx-react-lite/es/index.js'),
					B = e('./components/src/providers/cache.tsx'),
					x = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					P = e('./components/src/providers/treePath.tsx'),
					A = e('./components/src/hooks/useClickOutside.tsx'),
					u = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					f = e('./components/src/utilities/cloneWithProps.tsx'),
					g = e('./components/src/utilities/defined.ts'),
					v = e('./components/src/utilities/mergeProps.ts'),
					d = e('./components/src/utilities/mergeStyles.ts'),
					s = e('./components/src/hooks/useA11y.tsx'),
					w = e('./components/src/components/Atoms/Overlay/Overlay.tsx'),
					L = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/debounce/debounce.js');
				const O = () =>
						(0, M.AH)({
							position: 'relative',
							'&.ss__modal--open': { '& .ss__modal__content': { visibility: 'visible', opacity: 1 } },
							'&.ss__modal--disabled': { '& .ss__modal__button': { cursor: 'initial' } },
							'.ss__modal__button': { cursor: 'pointer' },
							'.ss__modal__content': {
								backgroundColor: '#fff',
								position: 'absolute',
								minWidth: '100%',
								visibility: 'hidden',
								opacity: 0,
								top: 'auto',
								left: 0,
								zIndex: 10004,
							},
						}),
					D = (0, y.PA)((U) => {
						const o = (0, x.u)(),
							a = { startOpen: !1, disableA11y: !1, lockScroll: !0, overlayColor: 'rgba(0,0,0,0.8)', treePath: (0, P.LU)() },
							c = (0, v.v6)('modal', o, a, U),
							{
								button: n,
								content: h,
								buttonSelector: I,
								children: K,
								disabled: W,
								open: E,
								onClick: R,
								lockScroll: V,
								startOpen: J,
								disableClickOutside: F,
								disableA11y: N,
								className: j,
								internalClassName: Y,
								disableStyles: Z,
								overlayColor: H,
								onOverlayClick: T,
								treePath: C,
							} = c,
							{ overrideElement: G, shouldRenderDefault: X } = (0, u._)('modal', c);
						if (!X) return G;
						const te = {
							overlay: {
								internalClassName: 'ss__modal__overlay',
								onClick: (p) => {
									T && T(p), k();
								},
								...(0, g.s)({ disableStyles: Z, color: H }),
								theme: c?.theme,
								treePath: C,
							},
						};
						let _, z;
						const $ = E === void 0;
						$ ? ([_, z] = (0, m.J0)(J)) : (_ = E);
						let Q;
						F ||
							(Q = (0, A.L)(() => {
								_ && (W || ($ && z && z(!1)));
							}));
						const k = () => {
								$ && z && z((p) => !p);
							},
							oe = (0, d.Z)(c, O);
						return (
							(0, m.vJ)(
								() => (
									_ && V ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = ''),
									() => {
										document.body.style.overflow = '';
									}
								),
								[_, V]
							),
							(0, m.vJ)(() => {
								const p = I ? (typeof I == 'string' ? document.querySelector(I) : I) : null,
									q = (0, L.s)(() => {
										setTimeout(() => {
											_ && V ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = '');
										}, 100);
									}, 10),
									ee = (ne) => {
										k(), R && R(ne);
									};
								return (
									p && (W || p.addEventListener('click', ee)),
									window.addEventListener('resize', q),
									() => {
										window.removeEventListener('resize', q), p && p.removeEventListener('click', ee);
									}
								);
							}, []),
							(0, t.Y)(B._, {
								children: (0, t.FD)('div', {
									...oe,
									className: i()('ss__modal', { 'ss__modal--open': _ }, { 'ss__modal--disabled': W }, j, Y),
									ref: Q,
									children: [
										!I &&
											n &&
											(0, t.Y)('div', {
												className: 'ss__modal__button',
												ref: (p) => (N ? null : (0, s.iy)(p)),
												'aria-expanded': _,
												role: 'button',
												onClick: (p) => {
													W || (k(), R && R(p));
												},
												children: (0, f.Y)(n, { open: _, toggleOpen: k, treePath: C }),
											}),
										(h || K) &&
											_ &&
											(0, t.FD)('div', {
												className: 'ss__modal__content',
												ref: (p) => (N ? null : (0, s.iy)(p)),
												children: [(0, f.Y)(h, { open: _, toggleOpen: k, treePath: C }), (0, f.Y)(K, { open: _, toggleOpen: k, treePath: C })],
											}),
										(0, t.Y)(w.h, { ...te.overlay, active: !!_ }),
									],
								}),
							})
						);
					});
				e.d(l, ['a', 0, D]);
			},
			'./components/src/components/Templates/AutocompleteModal/AutocompleteModal.tsx'(S, l, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					M = e('../../node_modules/mobx-react-lite/es/index.js'),
					b = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					i = e('./components/src/utilities/defined.ts'),
					y = e('./components/src/utilities/mergeProps.ts'),
					B = e('./components/src/utilities/mergeStyles.ts'),
					x = e('./components/src/providers/cache.tsx'),
					P = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					A = e('./components/src/components/Organisms/AutocompleteLayout/AutocompleteLayout.tsx'),
					u = e('./components/src/components/Molecules/Modal/Modal.tsx'),
					f = e('../../node_modules/classnames/index.js'),
					g = e.n(f),
					v = e('./components/src/components/Molecules/SearchInput/SearchInput.tsx'),
					d = e('./components/src/hooks/useA11y.tsx'),
					s = e('./components/src/hooks/useAcRenderedInput.tsx');
				const w = ({ width: O, height: D, theme: U }) => {
						const o = U?.variables;
						return (0, b.AH)({
							position: 'fixed',
							left: '0',
							width: '100%',
							height: '100%',
							right: '0',
							top: '0',
							zIndex: 1001,
							'& .ss__autocomplete-modal__inner': {
								position: 'absolute',
								left: 0,
								right: 0,
								top: '10vh',
								maxHeight: D ? 'initial' : '80vh',
								overflow: 'scroll',
								marginLeft: 'auto',
								marginRight: 'auto',
								background: '#fff',
								zIndex: 1001,
								width: O,
								height: D,
								maxWidth: '100vw',
							},
							'& .ss__overlay': { zIndex: 1e3 },
							'& .ss__autocomplete': { position: 'relative' },
							'& .ss__search-input': { margin: '1px' },
							'& .input_wrapper input': { background: '#eee' },
							'& .ss__search-input__button--close-search-icon': { border: 'none' },
							[`@media (max-width: ${o?.breakpoints.desktop}px)`]: { '& .ss__autocomplete-modal__inner': { top: '0', maxHeight: '100vh' } },
						});
					},
					L = (0, M.PA)((O) => {
						const D = (0, P.u)(),
							U = { layout: [['c1', 'c2', 'c3']], overlayColor: 'rgba(0,0,0,0.8)', width: '950px', renderInput: !0 },
							o = (0, y.v6)('autocompleteModal', D, U, O),
							[r, a] = (0, m.J0)(!1),
							c = '';
						let n = o.input,
							h = o.buttonSelector;
						n && typeof n == 'string' && (n = document.querySelector(n)), !h && n && (h = n);
						const {
								layout: I,
								disableStyles: K,
								overlayColor: W,
								controller: E,
								renderInput: R,
								className: V,
								internalClassName: J,
								treePath: F,
							} = o,
							N = (0, m.li)(null);
						(0, m.vJ)(() => {
							const C = (G, X) => {
								E.store.state.focusedInput || a(!1), X();
							};
							return (
								E.eventManager.on('focusChange', C),
								() => {
									E.eventManager.events.focusChange?.remove(C);
								}
							);
						}, []);
						const j = () => {
								E.setFocused(), a(!1);
							},
							Y = {
								autocompleteLayout: { layout: I, onReset: () => j(), ...(0, i.s)({ disableStyles: K }), theme: o?.theme, treePath: F },
								modal: {
									internalClassName: 'autocomplete-modal__modal',
									buttonSelector: h,
									onOverlayClick: j,
									overlayColor: W,
									open: r,
									...(0, i.s)({ disableStyles: K }),
									theme: o?.theme,
									treePath: F,
								},
								searchInput: {
									internalClassName: 'autocomplete-modal__search-input autocomplete__search-input',
									submitSearchButton: {
										onClick: () => {
											window.location.href = E.store.state.url.link.href;
										},
									},
									clearSearchButton: { icon: 'close-thin' },
									closeSearchButton: { onClick: () => j(), icon: 'angle-left' },
									inputName: c,
									...(0, i.s)({ disableStyles: K }),
									theme: o?.theme,
									treePath: `${F} modal`,
								},
							},
							Z = (0, B.Z)(o, w);
						let H;
						n && (H = (0, s.x)({ input: n, controller: E, renderedInputRef: N, renderInput: !!R, buttonSelector: h, setActive: a }));
						const T = { ...o };
						return (
							delete T.width,
							delete T.className,
							delete T.internalClassName,
							delete T.style,
							delete T.styleScript,
							delete T.themeStyleScript,
							I?.length && r
								? (0, t.Y)(x._, {
										children: (0, t.Y)('div', {
											...Z,
											className: g()('ss__autocomplete-modal', V, J),
											children: (0, t.Y)(u.a, {
												...Y.modal,
												children: (0, t.FD)('div', {
													className: 'ss__autocomplete-modal__inner',
													ref: (C) => (0, d.iy)(C, 0, !0, j),
													children: [
														R ? (0, t.Y)(v.D, { ...Y.searchInput, value: E.store.state.input || '', inputRef: N }) : (0, t.Y)(t.FK, {}),
														(0, t.Y)(A.h, { ...T, ...Y.autocompleteLayout, input: H, controller: E, treePath: `${F} modal` }),
													],
												}),
											}),
										}),
								  })
								: null
						);
					});
				e.d(l, ['c', 0, L]);
			},
			'./components/src/utilities/componentArgs.ts'(S, l, e) {
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
				e.d(l, ['F', 0, t]);
			},
			'./components/src/utilities/snapify.ts'(S, l, e) {
				'use strict';
				e.d(l, { p: () => L });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					m = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					M = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					b = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					i = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					y = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					B = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					x = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					P = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					A = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					u = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					f = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					g = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					v = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					d = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const s = {},
					w = { globals: { siteId: 'atkzs2' } };
				class L {
					static recommendation(r) {
						const a = r.id;
						if (s[a]) return s[a];
						const c = (s[a] = D({ client: w, controller: r }));
						return (
							c.on('afterStore', async ({ controller: n }, h) => {
								n.log.debug('controller', n), n.log.debug('store', n.store.toJSON()), await h();
							}),
							c.init(),
							c
						);
					}
					static autocomplete(r) {
						const a = r.id;
						if (s[a]) return s[a];
						const c = (s[a] = U({ client: w, controller: r }));
						return (
							c.on('afterStore', async ({ controller: n }, h) => {
								n.log.debug('controller', n), n.log.debug('store', n.store.toJSON()), await h();
							}),
							c.init(),
							c
						);
					}
					static search(r) {
						const a = r.id;
						if (s[a]) return s[a];
						const c = (s[a] = O({ client: w, controller: r }));
						return (
							c.on('afterStore', async ({ controller: n }, h) => {
								n.log.debug('controller', n), n.log.debug('store', n.store.toJSON()), await h();
							}),
							c.init(),
							c
						);
					}
				}
				function O(o) {
					const r = new P.V(new u.E({ settings: { coreType: 'query', corePrefix: o.controller.id } }), A.X);
					return new m.Tp(o.controller, {
						client: new i.K(o.client.globals, o.client.config),
						store: new B.U(o.controller, { urlManager: r }),
						urlManager: r,
						eventManager: new f.E(),
						profiler: new g.U(),
						logger: new v.V(),
						tracker: new d.J(o.client.globals),
					});
				}
				function D(o) {
					const r = new P.V(new u.E(), A.X).detach(!0);
					return new b.c(o.controller, {
						client: new i.K(o.client.globals, o.client.config),
						store: new x.t(o.controller, { urlManager: r }),
						urlManager: r,
						eventManager: new f.E(),
						profiler: new g.U(),
						logger: new v.V(),
						tracker: new d.J(o.client.globals),
					});
				}
				function U(o) {
					const r = new P.V(new u.E(), A.X).detach();
					return new M.Z(o.controller, {
						client: new i.K(o.client.globals, o.client.config),
						store: new y.Y(o.controller, { urlManager: r }),
						urlManager: r,
						eventManager: new f.E(),
						profiler: new g.U(),
						logger: new v.V(),
						tracker: new d.J(o.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(S, l, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					m = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const M = 'prism-block',
					b = (i) => {
						const y = (0, m.li)(null);
						return (
							(0, m.vJ)(() => {
								y.current && i.className?.includes('lang-') && !i.className?.includes(M) && window?.Prism?.highlightElement(y.current);
							}, [i.className, i.children, y]),
							(0, t.Y)('code', { ...i, ref: y, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(l, ['Z', 0, b]);
			},
			'../../node_modules/memoizerific sync recursive'(S) {
				function l(e) {
					const t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(l.keys = () => []), (l.resolve = l), (l.id = '../../node_modules/memoizerific sync recursive'), (S.exports = l);
			},
		},
	]);
})();

//# sourceMappingURL=components-Templates-AutocompleteModal-AutocompleteModal-stories.b87ed366.iframe.bundle.js.map
