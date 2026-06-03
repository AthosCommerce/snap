(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[6691],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(T, d, e) {
				'use strict';
				e.d(d, { p: () => t });
				function t(n) {
					if (typeof n != 'string') return n;
					let a = n.toLowerCase();
					return (a = a.replace(/[^\w\s]/g, '').trim()), (a = a.replace(/\s/g, '-')), a;
				}
			},
			'./components/src/components/Molecules/FacetPaletteOptions/FacetPaletteOptions.stories.tsx'(T, d, e) {
				'use strict';
				e.r(d), e.d(d, { Default: () => y, List: () => h, __namedExportsOrder: () => O, default: () => g });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/mobx-react-lite/es/index.js'),
					a = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					r = e('./components/src/components/Molecules/FacetPaletteOptions/FacetPaletteOptions.tsx'),
					p = e('./components/src/utilities/storybook.tsx'),
					o = e('./components/src/utilities/componentArgs.ts'),
					l = e('./components/src/utilities/snapify.ts');
				const M = `# Facet Palette Options

Renders a grid of facet palette options. 

## Sub-components
- Icon

## Usage
\`\`\`tsx
import { FacetPaletteOptions } from '@athoscommerce/snap-preact/components';
\`\`\`

### values
The \`values\` prop specifies all facet values where the facet type is 'palette'. Overrides values passed via the facet prop. 

\`\`\`tsx
<FacetPaletteOptions values={paletteFacet.values} />
\`\`\`

### facet
The \`facet\` prop specifies the reference to the facet object in the store.

\`\`\`tsx
<FacetPaletteOptions facet={paletteFacet} />
\`\`\`

### hideLabel
The \`hideLabel\` prop will disable the facet label.

\`\`\`tsx
<FacetPaletteOptions values={paletteFacet.values} hideLabel={true} />
\`\`\`

### columns
The \`columns\` prop is the number of columns the grid should contain. Not applicable if using \`horizontal\` prop'.

\`\`\`tsx
<FacetPaletteOptions values={paletteFacet.values} columns={3} />
\`\`\`

### gridSize
The \`gridSize\` prop is the size of each palette item. Does not apply if using \`columns\` prop.

\`\`\`tsx
<FacetPaletteOptions values={paletteFacet.values} gridSize={'45px'} columns={0} />
\`\`\`

### gapSize
The \`gapSize\` prop is the gap size between rows and columns.

\`\`\`tsx
<FacetPaletteOptions values={paletteFacet.values} gapSize={'10px'} />
\`\`\`

### hideIcon
The \`hideIcon\` prop will disable the facet icon from being rendered.

\`\`\`tsx
<FacetPaletteOptions values={paletteFacet.values} hideIcon={true} />
\`\`\`

### hideCount
The \`hideCount\` prop will disable the facet option counts from being rendered.

\`\`\`tsx
<FacetPaletteOptions values={paletteFacet.values} hideCount={true} />
\`\`\`

### hideCheckbox
The \`hideCheckbox\` prop will disable the facet option checkboxes from being rendered.

\`\`\`tsx
<FacetPaletteOptions values={paletteFacet.values} hideCheckbox={true} />
\`\`\`

### layout
The \`layout\` prop determines if the options should render as a \`list\` or \`grid\`. By default \`grid\` will be used.
\`\`\`tsx
<FacetPaletteOptions values={paletteFacet.values} hideCheckbox={true} />
\`\`\`

### horizontal
The \`horizontal\` prop render facet options horizontally.

\`\`\`tsx
<FacetPaletteOptions values={paletteFacet.values} horizontal={true} />
\`\`\`

### previewOnFocus
If using within Autocomplete, the \`previewOnFocus\` prop will invoke the \`value.preview()\` method when the value has been hovered over.

\`\`\`tsx
<Autocomplete>
	...
	<FacetPaletteOptions values={paletteFacet.values} previewOnFocus={true} />
	...
</Autocomplete>
\`\`\`

### valueProps
The \`valueProps\` prop will be spread onto each value's \`<a>\` element. Typical usage would be to provide custom callback functions when used within Autocomplete.

\`\`\`js
const valueProps = {
	onMouseEnter: (e) => {
		clearTimeout(delayTimeout);
		delayTimeout = setTimeout(() => {
			e.target.focus();
		}, delayTime);
	},
	onMouseLeave: () => {
		clearTimeout(delayTimeout);
	},
}
\`\`\`

\`\`\`tsx
<FacetPaletteOptions values={paletteFacet.values} valueProps={valueProps} />
\`\`\`

### icon
The \`icon\` prop specifiesan object with \`Icon\` component props. 

### Events

#### onClick
The \`onClick\` prop allows for a custom callback function for when a facet value is clicked.

\`\`\`tsx
<FacetPaletteOptions values={paletteFacet.values} onClick={(e)=>{console.log(e)}} />
\`\`\`


#### colorMapping
The colorMapping prop allows for custom color mapping overrides. The object used is keyed by a color label, and can take background, backgroundImageUrl and label properties. 
The color label can be any accepted CSS background property value. So a color, string, hash, RGB, gradiant, or an image URL could be used. 
The label takes a string value and replaces the color's original label for display.
The backgroundImageUrl will render an actual HTML Image element rather than css background url. 

\`\`\`tsx
const colorMapping = {
	'Camo': {
		background: 'brown',
		label: 'Army'
	},
	'Red': {
		backgroundImageUrl: 'https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/bfbec80cfd07b650c2f02b5f8a8c29b3c726e9da',
		label: 'Red'
	},
	'Striped': {
		background: "url(https://mysite.com/cdn/shop/files/candy-stripe-square_small.jpg)",
		label: "stripy"
	},
	'rainbow': {
		background: \`linear-gradient(
			90deg,
			rgba(255, 0, 0, 1) 0%,
			rgba(255, 154, 0, 1) 10%,
			rgba(208, 222, 33, 1) 20%,
			rgba(79, 220, 74, 1) 30%,
			rgba(63, 218, 216, 1) 40%,
			rgba(47, 201, 226, 1) 50%,
			rgba(28, 127, 238, 1) 60%,
			rgba(95, 21, 242, 1) 70%,
			rgba(186, 12, 248, 1) 80%,
			rgba(251, 7, 217, 1) 90%,
			rgba(255, 0, 0, 1) 100%
		)\`,
	}
}
<FacetPaletteOptions values={paletteFacet.values} colorMapping={colorMapping} />
\`\`\`


`,
					g = {
						title: 'Molecules/FacetPaletteOptions',
						component: r.P,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(a.oz, { options: { overrides: { code: p.Z } }, children: M }), (0, t.Y)(a.uY, { story: a.h1 })],
									}),
							},
						},
						decorators: [(v) => (0, t.Y)(v, {})],
						argTypes: {
							values: {
								description: 'Facet.values store reference',
								type: { required: !1 },
								table: { type: { summary: 'facet values store array' } },
								control: { type: 'none' },
							},
							facet: {
								description: 'Facet store reference',
								type: { required: !1 },
								table: { type: { summary: 'facet store object' } },
								control: { type: 'none' },
							},
							columns: {
								defaultValue: 4,
								description: 'Number of columns in palette. Not applicable if using horizontal prop',
								table: { category: 'Templates Legal', type: { summary: 'number' }, defaultValue: { summary: 4 } },
								control: { type: 'number' },
							},
							gridSize: {
								defaultValue: '45px',
								description: 'Size of each palette item. Does not apply if using `columns` prop',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '45px' } },
								control: { type: 'text' },
							},
							gapSize: {
								defaultValue: '8px',
								description: 'Gap size between rows and columns',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '8px' } },
								control: { type: 'text' },
							},
							hideLabel: {
								description: 'Hide facet option label',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideCount: {
								description: 'Hide facet option count',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
								control: { type: 'boolean' },
							},
							hideCheckbox: {
								description: 'Hide facet option checkbox',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
								control: { type: 'boolean' },
							},
							layout: {
								description: 'facet option layout',
								defaultValue: 'grid',
								table: { category: 'Templates Legal', type: { summary: 'string' } },
								options: ['grid', 'list'],
								control: { type: 'select' },
							},
							hideIcon: {
								description: 'Hide facet option icon',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							horizontal: {
								defaultValue: !1,
								description: 'Render facet options horizontally',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							previewOnFocus: {
								description: 'Invoke facet value preview upon focus',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							valueProps: {
								description: 'Object of facet value props',
								table: { category: 'Templates Legal', type: { summary: 'object' }, defaultValue: { summary: '{}' } },
								control: { type: 'none' },
							},
							onClick: {
								description: 'Facet option click event handler',
								table: { category: 'Templates Legal', type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onClick',
							},
							colorMapping: {
								description: 'Object of color mapping values',
								table: { category: 'Templates Legal', type: { summary: 'object' }, defaultValue: { summary: '{}' } },
								control: { type: 'object' },
							},
							...o.F,
						},
					},
					f = l.p.search({ id: 'FacetPaletteOptions', globals: { siteId: 'atkzs2' } }),
					c = (0, n.PA)(({ args: v, controller: u }) => {
						const L = u?.store?.facets.filter((R) => R.field == 'color').pop();
						return (0, t.Y)(r.P, { ...v, values: L.values });
					}),
					y = (v, { loaded: { controller: u } }) =>
						(0, t.Y)('div', { style: { maxWidth: v?.horizontal ? '1200px' : '500px' }, children: (0, t.Y)(c, { args: v, controller: u }) });
				y.loaders = [async () => (await f.search(), { controller: f })];
				const h = (v, { loaded: { controller: u } }) =>
					(0, t.Y)('div', { style: { maxWidth: v?.horizontal ? '1200px' : '500px' }, children: (0, t.Y)(c, { args: v, controller: u }) });
				(h.args = { layout: 'list', hideCount: !1, hideCheckbox: !1 }),
					(h.loaders = [async () => (await f.search(), { controller: f })]),
					(y.parameters = {
						...y.parameters,
						docs: {
							...y.parameters?.docs,
							source: {
								originalSource: `(args: FacetPaletteOptionsProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <div style={{
    maxWidth: args?.horizontal ? '1200px' : '500px'
  }}>
            <ObservableFacetPaletteOptions args={args} controller={controller} />
        </div>;
}`,
								...y.parameters?.docs?.source,
							},
						},
					}),
					(h.parameters = {
						...h.parameters,
						docs: {
							...h.parameters?.docs,
							source: {
								originalSource: `(args: FacetPaletteOptionsProps, {
  loaded: {
    controller
  }
}: {
  loaded: {
    controller: SearchController;
  };
}) => {
  return <div style={{
    maxWidth: args?.horizontal ? '1200px' : '500px'
  }}>
            <ObservableFacetPaletteOptions args={args} controller={controller} />
        </div>;
}`,
								...h.parameters?.docs?.source,
							},
						},
					});
				const O = ['Default', 'List'];
			},
			'./components/src/components/Atoms/Image/Image.tsx'(T, d, e) {
				'use strict';
				e.d(d, { _: () => v, t: () => h });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					a = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/classnames/index.js'),
					p = e.n(r),
					o = e('./components/src/providers/cache.tsx'),
					l = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					M = e('./components/src/providers/snap.tsx'),
					g = e('./components/src/providers/treePath.tsx'),
					f = e('./components/src/utilities/mergeProps.ts'),
					c = e('./components/src/utilities/mergeStyles.ts'),
					y = e('./components/src/hooks/useComponent.tsx');
				const h = '//cdn.athoscommerce.net/snap/images/fallback.png',
					O = ({ height: u }) =>
						(0, a.AH)({
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							height: u || 'auto',
							'& img': { flexShrink: '0', objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' },
							'&.ss__image--hidden': { '& img': { visibility: 'hidden' } },
						});
				function v(u) {
					const L = (0, l.u)(),
						R = (0, M.uk)(),
						W = (0, g.LU)(),
						F = { fallback: h, lazy: !0, treePath: W },
						U = (0, f.v6)('image', L, F, u),
						{
							alt: m,
							src: _,
							fallback: b,
							title: P,
							hoverSrc: i,
							lazy: C,
							onMouseOver: I,
							onMouseOut: j,
							onError: A,
							onLoad: D,
							onClick: N,
							className: S,
							internalClassName: w,
							customComponent: Y,
						} = U;
					if (Y) {
						const E = (0, y.x)(R?.templates?.library.import.component.image || {}, Y);
						if (E) return (0, t.Y)(E, { ...U });
					}
					const [V, z] = (0, n.J0)(!1),
						[H, B] = (0, n.J0)(!1),
						K = (0, n.li)('');
					(0, n.vJ)(() => {
						K.current = _;
					}),
						K.current && K.current != _ && z(!1);
					const J = (0, c.Z)(U, O);
					return (0, t.Y)(o._, {
						children: (0, t.Y)('div', {
							...J,
							className: p()('ss__image', { 'ss__image--hidden': !V }, S, w),
							children: (0, t.Y)('img', {
								src: (H ? i : _) || b,
								alt: m,
								title: P || m,
								loading: C ? 'lazy' : void 0,
								onLoad: (E) => {
									z(!0), D && D(E);
								},
								onClick: (E) => N && N(E),
								onError: (E) => {
									(E.target.src = b || ''), A && A(E);
								},
								onMouseOver: (E) => {
									i && B(!0), I && I(E);
								},
								onMouseOut: (E) => {
									i && B(!1), j && j(E);
								},
							}),
						}),
					});
				}
			},
			'./components/src/components/Molecules/Checkbox/Checkbox.tsx'(T, d, e) {
				'use strict';
				e.d(d, { S: () => U });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					a = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/classnames/index.js'),
					p = e.n(r),
					o = e('../../node_modules/mobx-react-lite/es/index.js'),
					l = e('./components/src/utilities/defined.ts'),
					M = e('./components/src/utilities/mergeProps.ts'),
					g = e('./components/src/utilities/mergeStyles.ts'),
					f = e('./components/src/providers/cache.tsx'),
					c = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					y = e('./components/src/providers/snap.tsx'),
					h = e('./components/src/providers/treePath.tsx'),
					O = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					v = e('./components/src/hooks/useA11y.tsx'),
					u = e('./components/src/hooks/useLang.tsx'),
					L = e('./components/src/hooks/useComponent.tsx'),
					R = e('../../node_modules/deepmerge/dist/cjs.js'),
					W = e.n(R);
				const F = ({ size: m, color: _, theme: b, native: P }) => {
						const i = isNaN(Number(m)) ? m : `${m}px`;
						return P
							? (0, a.AH)({})
							: (0, a.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									justifyContent: 'center',
									height: i,
									width: i,
									border: `1px solid ${_ || b?.variables?.colors?.primary || '#333'}`,
									'&.ss__checkbox--disabled': { opacity: 0.7 },
									'& .ss__checkbox__empty': { display: 'inline-block', width: `calc(${m} - 30%)`, height: `calc(${m} - 30%)` },
							  });
					},
					U = (0, o.PA)((m) => {
						const _ = (0, c.u)(),
							b = (0, y.uk)(),
							i = { size: '12px', startChecked: !1, disableA11y: !1, treePath: (0, h.LU)() },
							C = (0, M.v6)('checkbox', _, i, m),
							{
								checked: I,
								color: j,
								disabled: A,
								icon: D,
								iconColor: N,
								onClick: S,
								size: w,
								startChecked: Y,
								native: V,
								disableA11y: z,
								disableStyles: H,
								className: B,
								internalClassName: K,
								theme: J,
								treePath: E,
								lang: ne,
								customComponent: $,
								style: ie,
								styleScript: ce,
								themeStyleScript: ee,
								name: re,
								...Z
							} = C;
						if ($) {
							const x = (0, L.x)(b?.templates?.library.import.component.checkbox || {}, $);
							if (x) return (0, t.Y)(x, { ...C });
						}
						const te = isNaN(Number(w)) ? w : `${w}px`,
							oe = {
								icon: {
									internalClassName: 'ss__checkbox__icon',
									icon: 'check-thin',
									...(0, l.s)({ color: N || j || J?.variables?.colors?.primary, disableStyles: H, icon: D, size: te && `calc(${te} - 30%)` }),
									theme: C.theme,
									treePath: E,
								},
							};
						let s, X;
						const se = I === void 0;
						se ? ([s, X] = (0, n.J0)(Y)) : (s = I);
						const G = (x) => {
								A || (se && X && X((le) => !le), S && S(x));
							},
							k = (0, g.Z)(C, F),
							Q = { checkbox: {} },
							q = W()(Q, ne || {}),
							ae = (0, u.u)(q, { checkedState: s, disabled: A });
						return (0, t.Y)(f._, {
							children: V
								? (0, t.Y)('input', {
										...k,
										className: p()('ss__checkbox', 'ss__checkbox--native', { 'ss__checkbox--disabled': A, 'ss__checkbox--active': s }, B, K),
										type: 'checkbox',
										'aria-checked': s,
										onClick: (x) => G(x),
										disabled: A,
										checked: s,
								  })
								: (0, t.Y)('span', {
										...k,
										className: p()('ss__checkbox', { 'ss__checkbox--disabled': A, 'ss__checkbox--active': s }, B, K),
										onClick: (x) => G(x),
										ref: (x) => (z ? null : (0, v.iy)(x)),
										'aria-disabled': A,
										role: 'checkbox',
										'aria-checked': s,
										...Z,
										...ae.checkbox.all,
										children: s
											? (0, t.Y)(O.I, { ...oe.icon, ...(typeof D == 'string' ? { icon: D } : D) })
											: (0, t.Y)('span', { className: 'ss__checkbox__empty' }),
								  }),
						});
					});
			},
			'./components/src/components/Molecules/FacetPaletteOptions/FacetPaletteOptions.tsx'(T, d, e) {
				'use strict';
				e.d(d, { P: () => P });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					a = e('../../node_modules/classnames/index.js'),
					r = e.n(a),
					p = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					l = e('./components/src/utilities/defined.ts'),
					M = e('./components/src/utilities/mergeProps.ts'),
					g = e('./components/src/utilities/mergeStyles.ts'),
					f = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					c = e('./components/src/providers/cache.tsx'),
					y = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					h = e('./components/src/providers/snap.tsx'),
					O = e('./components/src/providers/treePath.tsx'),
					v = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					u = e('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
					L = e('./components/src/hooks/useLang.tsx'),
					R = e('./components/src/hooks/useComponent.tsx'),
					W = e('../../node_modules/deepmerge/dist/cjs.js'),
					F = e.n(W),
					U = e('../../node_modules/colord/index.mjs'),
					m = e('../../node_modules/colord/plugins/names.mjs'),
					_ = e('./components/src/components/Atoms/Image/Image.tsx');
				(0, U.X$)([m.A]);
				const b = ({ columns: i, gridSize: C, gapSize: I, horizontal: j, theme: A }) =>
						(0, n.AH)({
							display: 'flex',
							flexFlow: 'row wrap',
							gridTemplateColumns: i ? `repeat(${i}, calc((100% - (${i - 1} * ${I}))/ ${i}))` : `repeat(auto-fill, minmax(${C}, 1fr))`,
							gap: I,
							'.ss__facet-palette-options__option--list': { display: 'flex', flexDirection: 'row' },
							'.ss__facet-palette-options__option': {
								width: `calc(100% / ${i} - ${2 * Math.round((i + 2) / 2)}px )`,
								marginRight: I,
								marginBottom: I,
								[`:nth-of-type(${i}n)`]: { marginRight: '0' },
								'.ss__facet-palette-options__option__wrapper': { border: '2px solid transparent', borderRadius: '100%', padding: '2px' },
								'.ss__facet-palette-options__option__palette': {
									paddingTop: 'calc(100% - 2px)',
									border: '1px solid #EBEBEB',
									borderRadius: '100%',
									position: 'relative',
									'.ss__facet-palette-options__icon': {
										position: 'absolute',
										top: 0,
										right: 0,
										left: 0,
										margin: 'auto',
										bottom: 0,
										textAlign: 'center',
										stroke: 'black',
										strokeWidth: '3px',
										strokeLinejoin: 'round',
										opacity: 0,
									},
									'&.ss__facet-palette-options__option__palette--image': { paddingTop: '0', height: 'auto' },
								},
								'.ss__facet-palette-options__option__value': {
									display: 'block',
									textAlign: 'center',
									overflow: 'hidden',
									textOverflow: 'ellipsis',
									whiteSpace: 'nowrap',
								},
							},
							'@supports (display: grid)': { display: 'grid', '.ss__facet-palette-options__option': { margin: '0', width: 'initial' } },
							'&.ss__facet-palette-options--list': {
								display: 'flex',
								flexDirection: j ? 'row' : 'column',
								'.ss__facet-palette-options__option__wrapper': { borderColor: 'transparent', width: '16px', height: 'fit-content' },
								'.ss__facet-palette-options__option--filtered': { '.ss__facet-palette-options__option__value': { fontWeight: 'bold' } },
								'.ss__facet-palette-options__option--list': { alignItems: 'center' },
								'.ss__facet-palette-options__option__value__count': { marginLeft: '5px' },
								'.ss__facet-palette-options__checkbox': { marginRight: '5px' },
							},
							'&.ss__facet-palette-options--grid': {
								'.ss__facet-palette-options__checkbox': {
									display: 'flex',
									textAlign: 'center',
									overflow: 'hidden',
									margin: 'auto',
									marginBottom: '5px',
								},
								'.ss__facet-palette-options__option--filtered': {
									'.ss__facet-palette-options__option__wrapper': {
										borderColor: A?.variables?.colors?.primary || '#333 !important',
										padding: '0px',
										borderWidth: '4px',
									},
								},
								'.ss__facet-palette-options__option': {
									'&:hover': {
										cursor: 'pointer',
										'.ss__facet-palette-options__option__wrapper': { borderColor: '#EBEBEB' },
										'.ss__facet-palette-options__option__palette': { '.ss__facet-palette-options__icon': { opacity: 1 } },
									},
								},
							},
							'.ss__facet-palette-options__option__value__count': {
								fontSize: '0.8em',
								display: 'block',
								textAlign: 'center',
								overflow: 'hidden',
								textOverflow: 'ellipsis',
								whiteSpace: 'nowrap',
							},
						}),
					P = (0, p.PA)((i) => {
						const C = (0, y.u)(),
							I = (0, h.uk)(),
							j = (0, O.LU)(),
							A = {
								columns: 4,
								layout: 'grid',
								gridSize: '45px',
								gapSize: i.layout == 'list' ? '2px' : '8px',
								hideCount: !0,
								hideCheckbox: !0,
								treePath: j,
							},
							D = (0, M.v6)('facetPaletteOptions', C, A, i),
							{
								values: N,
								hideLabel: S,
								layout: w,
								hideCount: Y,
								hideCheckbox: V,
								colorMapping: z,
								hideIcon: H,
								onClick: B,
								previewOnFocus: K,
								valueProps: J,
								facet: E,
								horizontal: ne,
								disableStyles: $,
								className: ie,
								internalClassName: ce,
								treePath: ee,
								customComponent: re,
							} = D;
						if (re) {
							const s = (0, R.x)(I?.templates?.library.import.component.facetPaletteOptions || {}, re);
							if (s) return (0, t.Y)(s, { ...D });
						}
						ne && (D.columns = 0);
						const Z = {
								icon: {
									internalClassName: 'ss__facet-palette-options__icon',
									...(0, l.s)({ disableStyles: $, icon: 'close-thin', color: 'white', size: '40%' }),
									theme: D?.theme,
									treePath: ee,
								},
								image: { internalClassName: 'ss__facet-palette-options__image', ...(0, l.s)({ disableStyles: $ }), theme: D?.theme, treePath: ee },
								checkbox: {
									internalClassName: 'ss__facet-palette-options__checkbox',
									...(0, l.s)({ disableStyles: $ }),
									theme: D?.theme,
									treePath: ee,
								},
							},
							te = (0, g.Z)(D, b),
							oe = N || E?.values;
						return oe?.length
							? (0, t.Y)(c._, {
									children: (0, t.Y)('div', {
										...te,
										className: r()('ss__facet-palette-options', `ss__facet-palette-options--${w?.toLowerCase()}`, ie, ce),
										children: oe.map((s) => {
											const X = {
													paletteOption: {
														attributes: {
															'aria-label': `${
																s.filtered
																	? `remove selected filter ${E?.label || ''} - ${s.label}`
																	: E?.label
																	? `filter by ${E?.label} - ${s.label}`
																	: `filter by ${s.label}`
															}`,
														},
													},
												},
												se = F()(X, D.lang || {}),
												G = (0, L.u)(se, { facet: E, value: s });
											let k;
											z && (k = Object.fromEntries(Object.entries(z).map(([x, le]) => [x.toLowerCase(), le])));
											const Q = k && k[s.label.toLowerCase()] && k[s.label.toLowerCase()].background ? k[s.label.toLowerCase()].background : s.value,
												q =
													k && k[s.label.toLowerCase()] && k[s.label.toLowerCase()].backgroundImageUrl
														? k[s.label.toLowerCase()].backgroundImageUrl
														: void 0;
											let ae = !1;
											if (Q)
												try {
													ae = (0, U.Mj)(Q.toLowerCase()).isDark();
												} catch {}
											return (0, t.FD)(
												'a',
												{
													className: r()(
														'ss__facet-palette-options__option',
														{ 'ss__facet-palette-options__option--filtered': s.filtered },
														{ 'ss__facet-palette-options__option--dark': ae },
														`ss__facet-palette-options__option--${w?.toLowerCase()}`
													),
													href: s.url?.link?.href,
													...(S ? { title: s.label } : {}),
													...J,
													onClick: (x) => {
														s.url?.link?.onClick(x), B && B(x);
													},
													'aria-atomic': 'false',
													...(K ? (0, v.l)(() => s?.preview && s.preview()) : {}),
													...G.paletteOption?.all,
													children: [
														!V && (0, t.Y)(u.S, { ...Z.checkbox, checked: s.filtered, disableA11y: !0, ...G.paletteOption.attributes }),
														(0, t.Y)('div', {
															className: 'ss__facet-palette-options__option__wrapper',
															children: (0, t.FD)('div', {
																className: r()(
																	'ss__facet-palette-options__option__palette',
																	`ss__facet-palette-options__option__palette--${o.p(s.value)}`,
																	{ 'ss__facet-palette-options__option__palette--image': q }
																),
																style: { background: Q },
																children: [
																	q ? (0, t.Y)(_._, { ...Z.image, src: q, alt: s.label || s.value.toString() }) : null,
																	!H && s.filtered && w?.toLowerCase() == 'grid' && (0, t.Y)(f.I, { ...Z.icon }),
																],
															}),
														}),
														!S &&
															(0, t.Y)('span', {
																className: 'ss__facet-palette-options__option__value',
																children: k?.[s.label.toLowerCase()]?.label ?? s.label,
															}),
														!Y &&
															s?.count > 0 &&
															(0, t.FD)('span', { className: 'ss__facet-palette-options__option__value__count', children: ['(', s.count, ')'] }),
													],
												},
												s.value
											);
										}),
									}),
							  })
							: null;
					});
			},
			'./components/src/hooks/useA11y.tsx'(T, d, e) {
				'use strict';
				e.d(d, { DH: () => r, aZ: () => a, iy: () => p });
				const t = 9,
					n = 27,
					a = 'ss-a11y',
					r =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function p(o, l, M, g) {
					const f = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${f}`)) {
						const c = document.createElement('style');
						(c.type = 'text/css'),
							(c.id = f),
							(c.innerHTML = `[${a}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(c);
					}
					o &&
						!o.attributes?.[a] &&
						(o.setAttribute(a, !0),
						o.setAttribute('tabIndex', `${l || 0}`),
						o.addEventListener('keydown', (c) => {
							(c.code === 'Space' || c.code === 'Enter') && o.click();
						}),
						M &&
							o.addEventListener('keydown', function (c) {
								const y = o.querySelectorAll(r),
									h = y[0],
									O = y[y.length - 1];
								if (c.keyCode == n) {
									o.focus(), g && g(c), c.preventDefault(), c.stopPropagation();
									return;
								}
								(c.key === 'Tab' || c.keyCode === t) &&
									(c.shiftKey
										? document.activeElement === h && (O.focus(), c.preventDefault())
										: document.activeElement === O && (h.focus(), c.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useLang.tsx'(T, d, e) {
				'use strict';
				e.d(d, { u: () => t });
				const t = (n, a) => {
					const r = {};
					return (
						Object.keys(n).forEach((p) => {
							const o = n && n[p],
								l = {};
							o &&
								(o?.value &&
									(typeof o.value == 'function'
										? (l.value = { 'ss-lang': p, dangerouslySetInnerHTML: { __html: o.value(a) } })
										: (l.value = { 'ss-lang': p, dangerouslySetInnerHTML: { __html: o.value } })),
								o?.attributes &&
									Object.keys(o?.attributes).length &&
									((l.attributes = { 'ss-lang': p }),
									o?.attributes?.['aria-label'] &&
										(typeof o.attributes?.['aria-label'] == 'function'
											? (l.attributes['aria-label'] = o.attributes['aria-label'](a))
											: (l.attributes['aria-label'] = o.attributes['aria-label'])),
									o?.attributes?.['aria-valuetext'] &&
										(typeof o.attributes?.['aria-valuetext'] == 'function'
											? (l.attributes['aria-valuetext'] = o.attributes['aria-valuetext'](a))
											: (l.attributes['aria-valuetext'] = o.attributes['aria-valuetext'])),
									o?.attributes?.title &&
										(typeof o.attributes?.title == 'function'
											? (l.attributes.title = o.attributes.title(a))
											: (l.attributes.title = o.attributes.title)),
									o?.attributes?.alt &&
										(typeof o.attributes?.alt == 'function' ? (l.attributes.alt = o.attributes.alt(a)) : (l.attributes.alt = o.attributes.alt)),
									o?.attributes?.placeholder &&
										(typeof o.attributes?.placeholder == 'function'
											? (l.attributes.placeholder = o.attributes.placeholder(a))
											: (l.attributes.placeholder = o.attributes.placeholder))),
								(l.all = { ...l.value, ...l.attributes, 'ss-lang': p })),
								(r[p] = l);
						}),
						r
					);
				};
			},
			'./components/src/toolbox/createHoverProps/createHoverProps.ts'(T, d, e) {
				'use strict';
				e.d(d, { l: () => t });
				const t = (n, a = { delay: 333, focusElem: !0 }) => {
					let r;
					return {
						onMouseEnter: (p) => {
							clearTimeout(r),
								(r = window.setTimeout(() => {
									a.focusElem && p.target.focus(), n && n();
								}, a.delay || 333));
						},
						onMouseLeave: () => {
							clearTimeout(r);
						},
					};
				};
			},
			'./components/src/utilities/componentArgs.ts'(T, d, e) {
				'use strict';
				e.d(d, { F: () => t });
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
			'./components/src/utilities/defined.ts'(T, d, e) {
				'use strict';
				e.d(d, { s: () => t });
				function t(n) {
					const a = {};
					return (
						Object.keys(n).map((r) => {
							n[r] !== void 0 && (a[r] = n[r]);
						}),
						a
					);
				}
			},
			'./components/src/utilities/snapify.ts'(T, d, e) {
				'use strict';
				e.d(d, { p: () => R });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					n = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					a = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					r = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					p = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					o = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					l = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					M = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					g = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					f = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					c = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					y = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					h = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					O = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					v = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const u = {},
					L = { globals: { siteId: 'atkzs2' } };
				class R {
					static recommendation(_) {
						const b = _.id;
						if (u[b]) return u[b];
						const P = (u[b] = F({ client: L, controller: _ }));
						return (
							P.on('afterStore', async ({ controller: i }, C) => {
								i.log.debug('controller', i), i.log.debug('store', i.store.toJSON()), await C();
							}),
							P.init(),
							P
						);
					}
					static autocomplete(_) {
						const b = _.id;
						if (u[b]) return u[b];
						const P = (u[b] = U({ client: L, controller: _ }));
						return (
							P.on('afterStore', async ({ controller: i }, C) => {
								i.log.debug('controller', i), i.log.debug('store', i.store.toJSON()), await C();
							}),
							P.init(),
							P
						);
					}
					static search(_) {
						const b = _.id;
						if (u[b]) return u[b];
						const P = (u[b] = W({ client: L, controller: _ }));
						return (
							P.on('afterStore', async ({ controller: i }, C) => {
								i.log.debug('controller', i), i.log.debug('store', i.store.toJSON()), await C();
							}),
							P.init(),
							P
						);
					}
				}
				function W(m) {
					const _ = new g.V(new c.E({ settings: { coreType: 'query', corePrefix: m.controller.id } }), f.X);
					return new n.Tp(m.controller, {
						client: new p.K(m.client.globals, m.client.config),
						store: new l.U(m.controller, { urlManager: _ }),
						urlManager: _,
						eventManager: new y.E(),
						profiler: new h.U(),
						logger: new O.V(),
						tracker: new v.J(m.client.globals),
					});
				}
				function F(m) {
					const _ = new g.V(new c.E(), f.X).detach(!0);
					return new r.c(m.controller, {
						client: new p.K(m.client.globals, m.client.config),
						store: new M.t(m.controller, { urlManager: _ }),
						urlManager: _,
						eventManager: new y.E(),
						profiler: new h.U(),
						logger: new O.V(),
						tracker: new v.J(m.client.globals),
					});
				}
				function U(m) {
					const _ = new g.V(new c.E(), f.X).detach();
					return new a.Z(m.controller, {
						client: new p.K(m.client.globals, m.client.config),
						store: new o.Y(m.controller, { urlManager: _ }),
						urlManager: _,
						eventManager: new y.E(),
						profiler: new h.U(),
						logger: new O.V(),
						tracker: new v.J(m.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(T, d, e) {
				'use strict';
				e.d(d, { Z: () => r });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const a = 'prism-block',
					r = (p) => {
						const o = (0, n.li)(null);
						return (
							(0, n.vJ)(() => {
								o.current && p.className?.includes('lang-') && !p.className?.includes(a) && window?.Prism?.highlightElement(o.current);
							}, [p.className, p.children, o]),
							(0, t.Y)('code', { ...p, ref: o, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/colord/plugins/names.mjs'(T, d, e) {
				'use strict';
				e.d(d, { A: () => t }), Object.defineProperty(t, 'name', { value: 'default', configurable: !0 });
				function t(n, a) {
					var r = {
							white: '#ffffff',
							bisque: '#ffe4c4',
							blue: '#0000ff',
							cadetblue: '#5f9ea0',
							chartreuse: '#7fff00',
							chocolate: '#d2691e',
							coral: '#ff7f50',
							antiquewhite: '#faebd7',
							aqua: '#00ffff',
							azure: '#f0ffff',
							whitesmoke: '#f5f5f5',
							papayawhip: '#ffefd5',
							plum: '#dda0dd',
							blanchedalmond: '#ffebcd',
							black: '#000000',
							gold: '#ffd700',
							goldenrod: '#daa520',
							gainsboro: '#dcdcdc',
							cornsilk: '#fff8dc',
							cornflowerblue: '#6495ed',
							burlywood: '#deb887',
							aquamarine: '#7fffd4',
							beige: '#f5f5dc',
							crimson: '#dc143c',
							cyan: '#00ffff',
							darkblue: '#00008b',
							darkcyan: '#008b8b',
							darkgoldenrod: '#b8860b',
							darkkhaki: '#bdb76b',
							darkgray: '#a9a9a9',
							darkgreen: '#006400',
							darkgrey: '#a9a9a9',
							peachpuff: '#ffdab9',
							darkmagenta: '#8b008b',
							darkred: '#8b0000',
							darkorchid: '#9932cc',
							darkorange: '#ff8c00',
							darkslateblue: '#483d8b',
							gray: '#808080',
							darkslategray: '#2f4f4f',
							darkslategrey: '#2f4f4f',
							deeppink: '#ff1493',
							deepskyblue: '#00bfff',
							wheat: '#f5deb3',
							firebrick: '#b22222',
							floralwhite: '#fffaf0',
							ghostwhite: '#f8f8ff',
							darkviolet: '#9400d3',
							magenta: '#ff00ff',
							green: '#008000',
							dodgerblue: '#1e90ff',
							grey: '#808080',
							honeydew: '#f0fff0',
							hotpink: '#ff69b4',
							blueviolet: '#8a2be2',
							forestgreen: '#228b22',
							lawngreen: '#7cfc00',
							indianred: '#cd5c5c',
							indigo: '#4b0082',
							fuchsia: '#ff00ff',
							brown: '#a52a2a',
							maroon: '#800000',
							mediumblue: '#0000cd',
							lightcoral: '#f08080',
							darkturquoise: '#00ced1',
							lightcyan: '#e0ffff',
							ivory: '#fffff0',
							lightyellow: '#ffffe0',
							lightsalmon: '#ffa07a',
							lightseagreen: '#20b2aa',
							linen: '#faf0e6',
							mediumaquamarine: '#66cdaa',
							lemonchiffon: '#fffacd',
							lime: '#00ff00',
							khaki: '#f0e68c',
							mediumseagreen: '#3cb371',
							limegreen: '#32cd32',
							mediumspringgreen: '#00fa9a',
							lightskyblue: '#87cefa',
							lightblue: '#add8e6',
							midnightblue: '#191970',
							lightpink: '#ffb6c1',
							mistyrose: '#ffe4e1',
							moccasin: '#ffe4b5',
							mintcream: '#f5fffa',
							lightslategray: '#778899',
							lightslategrey: '#778899',
							navajowhite: '#ffdead',
							navy: '#000080',
							mediumvioletred: '#c71585',
							powderblue: '#b0e0e6',
							palegoldenrod: '#eee8aa',
							oldlace: '#fdf5e6',
							paleturquoise: '#afeeee',
							mediumturquoise: '#48d1cc',
							mediumorchid: '#ba55d3',
							rebeccapurple: '#663399',
							lightsteelblue: '#b0c4de',
							mediumslateblue: '#7b68ee',
							thistle: '#d8bfd8',
							tan: '#d2b48c',
							orchid: '#da70d6',
							mediumpurple: '#9370db',
							purple: '#800080',
							pink: '#ffc0cb',
							skyblue: '#87ceeb',
							springgreen: '#00ff7f',
							palegreen: '#98fb98',
							red: '#ff0000',
							yellow: '#ffff00',
							slateblue: '#6a5acd',
							lavenderblush: '#fff0f5',
							peru: '#cd853f',
							palevioletred: '#db7093',
							violet: '#ee82ee',
							teal: '#008080',
							slategray: '#708090',
							slategrey: '#708090',
							aliceblue: '#f0f8ff',
							darkseagreen: '#8fbc8f',
							darkolivegreen: '#556b2f',
							greenyellow: '#adff2f',
							seagreen: '#2e8b57',
							seashell: '#fff5ee',
							tomato: '#ff6347',
							silver: '#c0c0c0',
							sienna: '#a0522d',
							lavender: '#e6e6fa',
							lightgreen: '#90ee90',
							orange: '#ffa500',
							orangered: '#ff4500',
							steelblue: '#4682b4',
							royalblue: '#4169e1',
							turquoise: '#40e0d0',
							yellowgreen: '#9acd32',
							salmon: '#fa8072',
							saddlebrown: '#8b4513',
							sandybrown: '#f4a460',
							rosybrown: '#bc8f8f',
							darksalmon: '#e9967a',
							lightgoldenrodyellow: '#fafad2',
							snow: '#fffafa',
							lightgrey: '#d3d3d3',
							lightgray: '#d3d3d3',
							dimgray: '#696969',
							dimgrey: '#696969',
							olivedrab: '#6b8e23',
							olive: '#808000',
						},
						p = {};
					for (var o in r) p[r[o]] = o;
					var l = {};
					(n.prototype.toName = function (M) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var g,
							f,
							c = p[this.toHex()];
						if (c) return c;
						if (M?.closest) {
							var y = this.toRgb(),
								h = 1 / 0,
								O = 'black';
							if (!l.length) for (var v in r) l[v] = new n(r[v]).toRgb();
							for (var u in r) {
								var L = ((g = y), (f = l[u]), Math.pow(g.r - f.r, 2) + Math.pow(g.g - f.g, 2) + Math.pow(g.b - f.b, 2));
								L < h && ((h = L), (O = u));
							}
							return O;
						}
					}),
						a.string.push([
							function (M) {
								var g = M.toLowerCase(),
									f = g === 'transparent' ? '#0000' : r[g];
								return f ? new n(f).toRgb() : null;
							},
							'name',
						]);
				}
			},
			'../../node_modules/memoizerific sync recursive'(T) {
				function d(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(d.keys = () => []), (d.resolve = d), (d.id = '../../node_modules/memoizerific sync recursive'), (T.exports = d);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-FacetPaletteOptions-FacetPaletteOptions-stories.2636c890.iframe.bundle.js.map
