(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[9769],
		{
			'./components/src/components/Templates/AutocompleteModal/AutocompleteModal.stories.tsx'(S, l, e) {
				'use strict';
				e.r(l), e.d(l, { Default: () => d, __namedExportsOrder: () => g, default: () => x });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					M = e('./components/src/components/Templates/AutocompleteModal/AutocompleteModal.tsx'),
					T = e('./components/src/utilities/storybook.tsx'),
					m = e('./components/src/utilities/componentArgs.ts'),
					f = e('./components/src/utilities/snapify.ts');
				const B =
					"# AutocompleteModal\n\nRenders an autocomplete modal that binds to an `<input>` element.\n\nThe AutocompleteModal component is very similar to the Autocomplete component in functionality, however the main difference is that the AutocompleteModal components layout is determined by the layout prop, which specifies what child components render and where.\n\n## Components Used\n- autocompleteLayout\n- SearchInput\n- Modal\n\n## Usage\n\n### input\nThe required `input` prop expects either:\n\n- a string CSS selector that targets `<input>` element(s) to bind to\n\n- an `<input>` element to bind to\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} />\n```\n\n### controller\nThe required `controller` prop specifies a reference to the autocomplete controller.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} />\n```\n\n### layout\nThe `layout` prop is used to specify which child components render and where. It accepts either a **prebuilt layout string** or an **array of module names**.\n\n#### Prebuilt Layouts\n\nInstead of constructing a custom module array, you can pass one of the following string values:\n\n| Prebuilt | Expands To | Description |\n|---|---|---|\n| `'terms'` | `[['termsList'], ['no-results'], ['_', 'button.see-more']]` | Terms list only \u2014 no product results grid |\n| `'mobile'` | `[['termsList'], ['content'], ['_', 'button.see-more']]` | Compact view with terms and a small results section |\n| `'tablet'` | `[['c1', 'c3']]` | Two-column layout (terms + results, no facets) |\n| `'desktop'` | `[['c1', 'c2', 'c3']]` | Full three-column layout (terms, facets, results) |\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} layout={'terms'} />\n```\n\n#### Custom Layout Arrays\n\nFor full control, pass a 2-D array of module names. The order of these module names determines the order in which they will be rendered. Additionally you can pass arrays of modules to the array to specify new rows in the display.\n\nThere are also a few special module names - `c1`, `c2`, `c3`, `c4`, & `_` \n\nAll of the `cx` modules represent Columns which also have their own layout array by default, and can be overwrote via their own layout props. IE - `c1` module can be overwrote via the `column1` prop. \n\nThe `_` module is used a seperator module to center|left|right justify the other elements in the layout.\n\navailable modules to use in the layout are \n\n`c1`, `c2`, `c3`, `c4`,`TermsList`, `Terms.history`, `Terms.trending`, `Terms.suggestions`, `Facets`, `FacetsHorizontal`, `Button.see-more`, `Content`, `_`, `Banner.left`, `Banner.banner`, `Banner.footer`, `Banner.header`.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} layout={[['c1','c2','c3']]}/>\n```\n\n### column1\nThe `column1` prop specifies the layout to render in the `c1` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `['TermsList']`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} column1={{\n    width: '150px',\n    layout: ['Terms.history', 'Terms.trending']\n}}/>\n```\n\n### column2\nThe `column2` prop specifies a layout array to render in the `c2` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `['Facets']`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} column2={{\n    width: '150px',\n    layout: ['Facets']\n}}/>\n```\n\n### column3\nThe `column3` prop specifies a layout array to render in the `c3` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. Defaults to `[['Content'], ['_', 'Button.see-more']]`. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} column3={{\n    width: '150px',\n    layout: [['Content', ['_', 'Button.see-more', '_']]]\n}}/>\n```\n\n### column4\nThe `column4` prop specifies a layout array to render in the `c4` module. Takes an object with two properties, \n\n`width` which specifies how wide the the column should be. This can be a string - `150px` or `auto`. If set to auto, the column will automatically grow and shrink based on its surroundings. \n\n`layout` which specifies an array of modules to render in the column. All layout modules are available to use with the exception of the `cx` modules. Additional arrays for new rows are also supported.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} column4={{\nwidth: '150px',\nlayout: ['Facets']\n}}/>\n```\n\n### buttonSelector\nThe `buttonSelector` prop defines a CSS selector for the element that triggers the Modal to open. By default, it uses the selector provided in the `input` prop.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} buttonSelector={\".openSearchButton\"} />\n```\n\n### renderInput\nThe `renderInput` prop specifies whether the Search Input should be rendered. \n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} renderInput={false} />\n```\n\n### width\nThe `width` prop specifies a width for the overall component. The default value is '100%'.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} width=\"800px\" />\n```\n\n### excludeBanners\nThe `excludeBanners` prop specifies if the Autocomplete should automatically include banners. \n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} excludeBanners={true} />\n```\n\n### facetsTitle\nThe `facetsTitle` prop will display the given text above the facets area.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} facetsTitle={'Facets'} />\n```\n\n### contentTitle\nThe `contentTitle` prop will display the given text above the content area.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} contentTitle={'Search Results'} />\n```\n\n### overlayColor \nThe `overlayColor` prop specifies the color of the overlay.\n\n```tsx\n<AutocompleteModal controller={controller} input={'#searchInput'} overlayColor={'rgba(0,0,0,0.8)'} />\n```\n";
				var b = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const x = {
						title: 'Templates/AutocompleteModal',
						component: M.c,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(c.oz, { options: { overrides: { code: T.Z } }, children: B }), (0, t.Y)(c.uY, { story: c.h1 })],
									}),
							},
						},
						decorators: [
							(v) =>
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
										(0, t.Y)(v, {}),
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
							...m.F,
						},
					},
					P = f.p.autocomplete({
						id: 'AutocompleteModal',
						selector: '#searchInput',
						globals: { siteId: 'atkzs2' },
						settings: { trending: { limit: 5 } },
					}),
					d = (v, { loaded: { controller: E } }) => {
						const [p, s] = (0, b.J0)(!1),
							w = [
								{ active: p === 'dress', preview: () => s('dress'), value: 'dress', url: { href: '#' } },
								{ active: p === 'shirt', preview: () => s('shirt'), value: 'shirt', url: { href: '#' } },
								{ active: p === 'shoes', preview: () => s('shoes'), value: 'shoes', url: { href: '#' } },
								{ active: p === 'hat', preview: () => s('hat'), value: 'hat', url: { href: '#' } },
								{ active: p === 'pants', preview: () => s('pants'), value: 'pants', url: { href: '#' } },
								{ active: p === 'socks', preview: () => s('socks'), value: 'socks', url: { href: '#' } },
							];
						E.store.history = w;
						const [L, A] = (0, b.J0)(!1);
						return (
							(0, b.vJ)(() => {
								document.querySelector('#searchInput') && A(!0);
							}, []),
							L ? (0, t.Y)(M.c, { ...v, controller: E, input: E?.config.selector }) : (0, t.Y)(t.FK, {})
						);
					};
				(d.loaders = [async () => ({ controller: await P })]),
					(d.parameters = {
						...d.parameters,
						docs: {
							...d.parameters?.docs,
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
								...d.parameters?.docs?.source,
							},
						},
					});
				const g = ['Default'];
			},
			'./components/src/components/Molecules/Modal/Modal.tsx'(S, l, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					M = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					T = e('../../node_modules/classnames/index.js'),
					m = e.n(T),
					f = e('../../node_modules/mobx-react-lite/es/index.js'),
					B = e('./components/src/providers/cache.tsx'),
					b = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					x = e('./components/src/providers/treePath.tsx'),
					P = e('./components/src/hooks/useClickOutside.tsx'),
					d = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					g = e('./components/src/utilities/cloneWithProps.tsx'),
					v = e('./components/src/utilities/defined.ts'),
					E = e('./components/src/utilities/mergeProps.ts'),
					p = e('./components/src/utilities/mergeStyles.ts'),
					s = e('./components/src/hooks/useA11y.tsx'),
					w = e('./components/src/components/Atoms/Overlay/Overlay.tsx'),
					L = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/debounce/debounce.js');
				const A = () =>
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
					C = (0, f.PA)((R) => {
						const o = (0, b.u)(),
							a = { startOpen: !1, disableA11y: !1, lockScroll: !0, overlayColor: 'rgba(0,0,0,0.8)', treePath: (0, x.LU)() },
							i = (0, E.v6)('modal', o, a, R),
							{
								button: n,
								content: _,
								buttonSelector: D,
								children: W,
								disabled: F,
								open: z,
								onClick: k,
								lockScroll: V,
								startOpen: N,
								disableClickOutside: U,
								disableA11y: y,
								className: Z,
								internalClassName: X,
								disableStyles: j,
								overlayColor: H,
								onOverlayClick: $,
								treePath: K,
							} = i,
							{ overrideElement: O, shouldRenderDefault: I } = (0, d._)('modal', i);
						if (!I) return O;
						const q = {
							overlay: {
								internalClassName: 'ss__modal__overlay',
								onClick: (h) => {
									$ && $(h), Y();
								},
								...(0, v.s)({ disableStyles: j, color: H }),
								theme: i?.theme,
								treePath: K,
							},
						};
						let u, J;
						const G = z === void 0;
						G ? ([u, J] = (0, c.J0)(N)) : (u = z);
						let ee;
						U ||
							(ee = (0, P.L)(() => {
								u && (F || (G && J && J(!1)));
							}));
						const Y = () => {
								G && J && J((h) => !h);
							},
							ae = (0, p.Z)(i, A);
						(0, c.vJ)(
							() => (
								u && V ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = ''),
								() => {
									document.body.style.overflow = '';
								}
							),
							[u, V]
						);
						const te = (0, c.li)(u),
							oe = (0, c.li)(V);
						return (
							(te.current = u),
							(oe.current = V),
							(0, c.vJ)(() => {
								const h = D ? (typeof D == 'string' ? document.querySelector(D) : D) : null;
								let ne = !1,
									Q;
								const se = (0, L.s)(() => {
										clearTimeout(Q),
											(Q = setTimeout(() => {
												ne || (te.current && oe.current ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = ''));
											}, 100));
									}, 10),
									re = (le) => {
										Y(), k && k(le);
									};
								return (
									h && (F || h.addEventListener('click', re)),
									window.addEventListener('resize', se),
									() => {
										(ne = !0), clearTimeout(Q), window.removeEventListener('resize', se), h && h.removeEventListener('click', re);
									}
								);
							}, []),
							(0, t.Y)(B._, {
								children: (0, t.FD)('div', {
									...ae,
									className: m()('ss__modal', { 'ss__modal--open': u }, { 'ss__modal--disabled': F }, Z, X),
									ref: ee,
									children: [
										!D &&
											n &&
											(0, t.Y)('div', {
												className: 'ss__modal__button',
												ref: (h) => (y ? null : (0, s.iy)(h)),
												'aria-expanded': u,
												role: 'button',
												onClick: (h) => {
													F || (Y(), k && k(h));
												},
												children: (0, g.Y)(n, { open: u, toggleOpen: Y, treePath: K }),
											}),
										(_ || W) &&
											u &&
											(0, t.FD)('div', {
												className: 'ss__modal__content',
												ref: (h) => (y ? null : (0, s.iy)(h)),
												children: [(0, g.Y)(_, { open: u, toggleOpen: Y, treePath: K }), (0, g.Y)(W, { open: u, toggleOpen: Y, treePath: K })],
											}),
										(0, t.Y)(w.h, { ...q.overlay, active: !!u }),
									],
								}),
							})
						);
					});
				e.d(l, ['a', 0, C]);
			},
			'./components/src/components/Templates/AutocompleteModal/AutocompleteModal.tsx'(S, l, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					M = e('../../node_modules/mobx-react-lite/es/index.js'),
					T = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('./components/src/utilities/defined.ts'),
					f = e('./components/src/utilities/mergeProps.ts'),
					B = e('./components/src/utilities/mergeStyles.ts'),
					b = e('./components/src/providers/cache.tsx'),
					x = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					P = e('./components/src/components/Organisms/AutocompleteLayout/AutocompleteLayout.tsx'),
					d = e('./components/src/components/Molecules/Modal/Modal.tsx'),
					g = e('../../node_modules/classnames/index.js'),
					v = e.n(g),
					E = e('./components/src/components/Molecules/SearchInput/SearchInput.tsx'),
					p = e('./components/src/hooks/useA11y.tsx'),
					s = e('./components/src/hooks/useAcRenderedInput.tsx');
				const w = ({ width: A, height: C, theme: R }) => {
						const o = R?.variables;
						return (0, T.AH)({
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
								maxHeight: C ? 'initial' : '80vh',
								overflow: 'scroll',
								marginLeft: 'auto',
								marginRight: 'auto',
								background: '#fff',
								zIndex: 1001,
								width: A,
								height: C,
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
					L = (0, M.PA)((A) => {
						const C = (0, x.u)(),
							R = { layout: [['c1', 'c2', 'c3']], overlayColor: 'rgba(0,0,0,0.8)', width: '950px', renderInput: !0 },
							o = (0, f.v6)('autocompleteModal', C, R, A),
							[r, a] = (0, c.J0)(!1),
							i = '';
						let n = o.input,
							_ = o.buttonSelector;
						n && typeof n == 'string' && (n = document.querySelector(n)), !_ && n && (_ = n);
						const {
							layout: D,
							disableStyles: W,
							overlayColor: F,
							renderInput: z,
							className: k,
							internalClassName: V,
							treePath: N,
							tabManager: U,
						} = o;
						let y = o.controller,
							Z = [y];
						U && U.active && ((y = U.active?.controller), (Z = U.tabs.map((I) => I.controller)));
						const X = (0, c.li)(null);
						(0, c.vJ)(() => {
							const I = (q, u) => {
								y.store.state.focusedInput || a(!1), u();
							};
							return (
								y.eventManager.on('focusChange', I),
								() => {
									y.eventManager.events.focusChange?.remove(I);
								}
							);
						}, [y]);
						const j = () => {
								y.setFocused(), a(!1);
							},
							H = {
								autocompleteLayout: { layout: D, onReset: () => j(), tabManager: U, ...(0, m.s)({ disableStyles: W }), theme: o?.theme, treePath: N },
								modal: {
									internalClassName: 'ss__autocomplete-modal__modal',
									buttonSelector: _,
									onOverlayClick: j,
									overlayColor: F,
									open: r,
									...(0, m.s)({ disableStyles: W }),
									theme: o?.theme,
									treePath: N,
								},
								searchInput: {
									internalClassName: 'ss__autocomplete-modal__search-input ss__autocomplete__search-input',
									submitSearchButton: {
										onClick: () => {
											window.location.href = y.store.state.url.link.href;
										},
									},
									clearSearchButton: { icon: 'close-thin' },
									closeSearchButton: { onClick: () => j(), icon: 'angle-left' },
									inputName: i,
									...(0, m.s)({ disableStyles: W }),
									theme: o?.theme,
									treePath: `${N} modal`,
								},
							},
							$ = (0, B.Z)(o, w);
						let K;
						n && (K = (0, s.x)({ input: n, controllers: Z, renderedInputRef: X, renderInput: !!z, buttonSelector: _, setActive: a }));
						const O = { ...o };
						return (
							delete O.width,
							delete O.className,
							delete O.internalClassName,
							delete O.style,
							delete O.styleScript,
							delete O.themeStyleScript,
							D?.length && r
								? (0, t.Y)(b._, {
										children: (0, t.Y)('div', {
											...$,
											className: v()('ss__autocomplete-modal', k, V),
											children: (0, t.Y)(d.a, {
												...H.modal,
												children: (0, t.FD)('div', {
													className: 'ss__autocomplete-modal__inner',
													ref: (I) => (0, p.iy)(I, 0, !0, j),
													children: [
														z ? (0, t.Y)(E.D, { ...H.searchInput, value: y.store.state.input || '', inputRef: X }) : (0, t.Y)(t.FK, {}),
														(0, t.Y)(P.h, { ...O, ...H.autocompleteLayout, input: K, controller: y, treePath: `${N} modal` }),
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
					c = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					M = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					T = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					m = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					f = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					B = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					b = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					x = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					P = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					d = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					g = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					v = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					E = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					p = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const s = {},
					w = { globals: { siteId: 'atkzs2' } };
				class L {
					static recommendation(r) {
						const a = r.id;
						if (s[a]) return s[a];
						const i = (s[a] = C({ client: w, controller: r }));
						return (
							i.on('afterStore', async ({ controller: n }, _) => {
								n.log.debug('controller', n), n.log.debug('store', n.store.toJSON()), await _();
							}),
							i.init(),
							i
						);
					}
					static autocomplete(r) {
						const a = r.id;
						if (s[a]) return s[a];
						const i = (s[a] = R({ client: w, controller: r }));
						return (
							i.on('afterStore', async ({ controller: n }, _) => {
								n.log.debug('controller', n), n.log.debug('store', n.store.toJSON()), await _();
							}),
							i.init(),
							i
						);
					}
					static search(r) {
						const a = r.id;
						if (s[a]) return s[a];
						const i = (s[a] = A({ client: w, controller: r }));
						return (
							i.on('afterStore', async ({ controller: n }, _) => {
								n.log.debug('controller', n), n.log.debug('store', n.store.toJSON()), await _();
							}),
							i.init(),
							i
						);
					}
				}
				function A(o) {
					const r = new x.V(new d.E({ settings: { coreType: 'query', corePrefix: o.controller.id } }), P.X);
					return new c.Tp(o.controller, {
						client: new m.K(o.client.globals, o.client.config),
						store: new B.U(o.controller, { urlManager: r }),
						urlManager: r,
						eventManager: new g.E(),
						profiler: new v.U(),
						logger: new E.V(),
						tracker: new p.J(o.client.globals),
					});
				}
				function C(o) {
					const r = new x.V(new d.E(), P.X).detach(!0);
					return new T.c(o.controller, {
						client: new m.K(o.client.globals, o.client.config),
						store: new b.t(o.controller, { urlManager: r }),
						urlManager: r,
						eventManager: new g.E(),
						profiler: new v.U(),
						logger: new E.V(),
						tracker: new p.J(o.client.globals),
					});
				}
				function R(o) {
					const r = new x.V(new d.E(), P.X).detach();
					return new M.Z(o.controller, {
						client: new m.K(o.client.globals, o.client.config),
						store: new f.Y(o.controller, { urlManager: r }),
						urlManager: r,
						eventManager: new g.E(),
						profiler: new v.U(),
						logger: new E.V(),
						tracker: new p.J(o.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(S, l, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					c = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const M = 'prism-block',
					T = (m) => {
						const f = (0, c.li)(null);
						return (
							(0, c.vJ)(() => {
								f.current && m.className?.includes('lang-') && !m.className?.includes(M) && window?.Prism?.highlightElement(f.current);
							}, [m.className, m.children, f]),
							(0, t.Y)('code', { ...m, ref: f, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(l, ['Z', 0, T]);
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

//# sourceMappingURL=components-Templates-AutocompleteModal-AutocompleteModal-stories.07b7eb3f.iframe.bundle.js.map
