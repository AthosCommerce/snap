(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[6691],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(D, c, e) {
				'use strict';
				e.d(c, { p: () => o });
				function o(n) {
					if (typeof n != 'string') return n;
					let s = n.toLowerCase();
					return (s = s.replace(/[^\w\s]/g, '').trim()), (s = s.replace(/\s/g, '-')), s;
				}
			},
			'./components/src/components/Molecules/FacetPaletteOptions/FacetPaletteOptions.stories.tsx'(D, c, e) {
				'use strict';
				e.r(c), e.d(c, { Default: () => y, List: () => h, __namedExportsOrder: () => O, default: () => g });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/mobx-react-lite/es/index.js'),
					s = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					r = e('./components/src/components/Molecules/FacetPaletteOptions/FacetPaletteOptions.tsx'),
					p = e('./components/src/utilities/storybook.tsx'),
					t = e('./components/src/utilities/componentArgs.ts'),
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
									(0, o.FD)('div', {
										children: [(0, o.Y)(s.oz, { options: { overrides: { code: p.Z } }, children: M }), (0, o.Y)(s.uY, { story: s.h1 })],
									}),
							},
						},
						decorators: [(v) => (0, o.Y)(v, {})],
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
							...t.F,
						},
					},
					_ = l.p.search({ id: 'FacetPaletteOptions', globals: { siteId: 'atkzs2' } }),
					d = (0, n.PA)(({ args: v, controller: u }) => {
						const T = u?.store?.facets.filter((w) => w.field == 'color').pop();
						return (0, o.Y)(r.P, { ...v, values: T.values });
					}),
					y = (v, { loaded: { controller: u } }) =>
						(0, o.Y)('div', { style: { maxWidth: v?.horizontal ? '1200px' : '500px' }, children: (0, o.Y)(d, { args: v, controller: u }) });
				y.loaders = [async () => (await _.search(), { controller: _ })];
				const h = (v, { loaded: { controller: u } }) =>
					(0, o.Y)('div', { style: { maxWidth: v?.horizontal ? '1200px' : '500px' }, children: (0, o.Y)(d, { args: v, controller: u }) });
				(h.args = { layout: 'list', hideCount: !1, hideCheckbox: !1 }),
					(h.loaders = [async () => (await _.search(), { controller: _ })]),
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
			'./components/src/components/Atoms/Image/Image.tsx'(D, c, e) {
				'use strict';
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					s = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/classnames/index.js'),
					p = e.n(r),
					t = e('../../node_modules/mobx-react-lite/es/index.js'),
					l = e('./components/src/providers/cache.tsx'),
					M = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					g = e('./components/src/providers/treePath.tsx'),
					_ = e('./components/src/utilities/mergeProps.ts'),
					d = e('./components/src/utilities/mergeStyles.ts'),
					y = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const h = '//cdn.athoscommerce.net/snap/images/fallback.png',
					O = ({ height: u }) =>
						(0, s.AH)({
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							height: u || 'auto',
							'& img': { flexShrink: '0', objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' },
							'&.ss__image--hidden': { '& img': { visibility: 'hidden' } },
						}),
					v = (0, t.PA)((u) => {
						const T = (0, M.u)(),
							w = (0, g.LU)(),
							W = { fallback: h, lazy: !0, treePath: w },
							U = (0, _.v6)('image', T, W, u),
							{
								alt: L,
								src: m,
								fallback: f,
								title: E,
								hoverSrc: i,
								lazy: b,
								onMouseOver: x,
								onMouseOut: k,
								onError: P,
								onLoad: F,
								onClick: B,
								className: j,
								internalClassName: Y,
							} = U,
							{ overrideElement: $, shouldRenderDefault: S } = (0, y._)('image', U);
						if (!S) return $;
						const [V, K] = (0, n.J0)(!1),
							[z, N] = (0, n.J0)(!1),
							R = (0, n.li)('');
						(0, n.vJ)(() => {
							R.current = m;
						}),
							R.current && R.current != m && K(!1);
						const H = (0, d.Z)(U, O);
						return (0, o.Y)(l._, {
							children: (0, o.Y)('div', {
								...H,
								className: p()('ss__image', { 'ss__image--hidden': !V }, j, Y),
								children: (0, o.Y)('img', {
									src: (z ? i : m) || f,
									alt: L,
									title: E || L,
									loading: b ? 'lazy' : void 0,
									onLoad: (C) => {
										K(!0), F && F(C);
									},
									onClick: (C) => B && B(C),
									onError: (C) => {
										(C.target.src = f || ''), P && P(C);
									},
									onMouseOver: (C) => {
										i && N(!0), x && x(C);
									},
									onMouseOut: (C) => {
										i && N(!1), k && k(C);
									},
								}),
							}),
						});
					});
				e.d(c, ['_', 0, v, 't', 0, h]);
			},
			'./components/src/components/Molecules/Checkbox/Checkbox.tsx'(D, c, e) {
				'use strict';
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					s = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/classnames/index.js'),
					p = e.n(r),
					t = e('../../node_modules/mobx-react-lite/es/index.js'),
					l = e('./components/src/utilities/defined.ts'),
					M = e('./components/src/utilities/mergeProps.ts'),
					g = e('./components/src/utilities/mergeStyles.ts'),
					_ = e('./components/src/providers/cache.tsx'),
					d = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					y = e('./components/src/providers/treePath.tsx'),
					h = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					O = e('./components/src/hooks/useA11y.tsx'),
					v = e('./components/src/hooks/useLang.tsx'),
					u = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					T = e('../../node_modules/deepmerge/dist/cjs.js'),
					w = e.n(T);
				const W = ({ size: L, color: m, theme: f, native: E }) => {
						const i = isNaN(Number(L)) ? L : `${L}px`;
						return E
							? (0, s.AH)({})
							: (0, s.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									justifyContent: 'center',
									height: i,
									width: i,
									border: `1px solid ${m || f?.variables?.colors?.primary || '#333'}`,
									'&.ss__checkbox--disabled': { opacity: 0.7 },
									'& .ss__checkbox__empty': { display: 'inline-block', width: `calc(${L} - 30%)`, height: `calc(${L} - 30%)` },
							  });
					},
					U = (0, t.PA)((L) => {
						const m = (0, d.u)(),
							E = { size: '12px', startChecked: !1, disableA11y: !1, treePath: (0, y.LU)() },
							i = (0, M.v6)('checkbox', m, E, L),
							{
								checked: b,
								color: x,
								disabled: k,
								icon: P,
								iconColor: F,
								onClick: B,
								size: j,
								startChecked: Y,
								native: $,
								disableA11y: S,
								disableStyles: V,
								className: K,
								internalClassName: z,
								theme: N,
								treePath: R,
								lang: H,
								style: C,
								styleScript: le,
								themeStyleScript: ie,
								name: q,
								...ae
							} = i,
							{ overrideElement: ne, shouldRenderDefault: J } = (0, u._)('checkbox', i);
						if (!J) return ne;
						const ee = isNaN(Number(j)) ? j : `${j}px`,
							te = {
								icon: {
									internalClassName: 'ss__checkbox__icon',
									icon: 'check-thin',
									...(0, l.s)({ color: F || x || N?.variables?.colors?.primary, disableStyles: V, icon: P, size: ee && `calc(${ee} - 30%)` }),
									theme: i.theme,
									treePath: R,
								},
							};
						let a, Z;
						const oe = b === void 0;
						oe ? ([a, Z] = (0, n.J0)(Y)) : (a = b);
						const X = (A) => {
								k || (oe && Z && Z((re) => !re), B && B(A));
							},
							I = (0, g.Z)(i, W),
							G = { checkbox: {} },
							Q = w()(G, H || {}),
							se = (0, v.u)(Q, { checkedState: a, disabled: k });
						return (0, o.Y)(_._, {
							children: $
								? (0, o.Y)('input', {
										...I,
										className: p()('ss__checkbox', 'ss__checkbox--native', { 'ss__checkbox--disabled': k, 'ss__checkbox--active': a }, K, z),
										type: 'checkbox',
										'aria-checked': a,
										onClick: (A) => X(A),
										disabled: k,
										checked: a,
								  })
								: (0, o.Y)('span', {
										...I,
										className: p()('ss__checkbox', { 'ss__checkbox--disabled': k, 'ss__checkbox--active': a }, K, z),
										onClick: (A) => X(A),
										ref: (A) => (S ? null : (0, O.iy)(A)),
										'aria-disabled': k,
										role: 'checkbox',
										'aria-checked': a,
										...ae,
										...se.checkbox.all,
										children: a
											? (0, o.Y)(h.I, { ...te.icon, ...(typeof P == 'string' ? { icon: P } : P) })
											: (0, o.Y)('span', { className: 'ss__checkbox__empty' }),
								  }),
						});
					});
				e.d(c, ['S', 0, U]);
			},
			'./components/src/components/Molecules/FacetPaletteOptions/FacetPaletteOptions.tsx'(D, c, e) {
				'use strict';
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = e('../../node_modules/classnames/index.js'),
					r = e.n(s),
					p = e('../../node_modules/mobx-react-lite/es/index.js'),
					t = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					l = e('./components/src/utilities/defined.ts'),
					M = e('./components/src/utilities/mergeProps.ts'),
					g = e('./components/src/utilities/mergeStyles.ts'),
					_ = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					d = e('./components/src/providers/cache.tsx'),
					y = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					h = e('./components/src/providers/treePath.tsx'),
					O = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					v = e('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
					u = e('./components/src/hooks/useLang.tsx'),
					T = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					w = e('../../node_modules/deepmerge/dist/cjs.js'),
					W = e.n(w),
					U = e('../../node_modules/colord/index.mjs'),
					L = e('../../node_modules/colord/plugins/names.mjs'),
					m = e('./components/src/components/Atoms/Image/Image.tsx');
				(0, U.X$)([L.A]);
				const f = ({ columns: i, gridSize: b, gapSize: x, horizontal: k, theme: P }) =>
						(0, n.AH)({
							display: 'flex',
							flexFlow: 'row wrap',
							gridTemplateColumns: i ? `repeat(${i}, calc((100% - (${i - 1} * ${x}))/ ${i}))` : `repeat(auto-fill, minmax(${b}, 1fr))`,
							gap: x,
							'.ss__facet-palette-options__option--list': { display: 'flex', flexDirection: 'row' },
							'.ss__facet-palette-options__option': {
								width: `calc(100% / ${i} - ${2 * Math.round((i + 2) / 2)}px )`,
								marginRight: x,
								marginBottom: x,
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
								flexDirection: k ? 'row' : 'column',
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
										borderColor: P?.variables?.colors?.primary || '#333 !important',
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
					E = (0, p.PA)((i) => {
						const b = (0, y.u)(),
							x = (0, h.LU)(),
							k = {
								columns: 4,
								layout: 'grid',
								gridSize: '45px',
								gapSize: i.layout == 'list' ? '2px' : '8px',
								hideCount: !0,
								hideCheckbox: !0,
								treePath: x,
							},
							P = (0, M.v6)('facetPaletteOptions', b, k, i),
							{
								values: F,
								hideLabel: B,
								layout: j,
								hideCount: Y,
								hideCheckbox: $,
								colorMapping: S,
								hideIcon: V,
								onClick: K,
								previewOnFocus: z,
								valueProps: N,
								facet: R,
								horizontal: H,
								disableStyles: C,
								className: le,
								internalClassName: ie,
								treePath: q,
							} = P,
							{ overrideElement: ae, shouldRenderDefault: ne } = (0, T._)('facetPaletteOptions', P);
						if (!ne) return ae;
						H && (P.columns = 0);
						const J = {
								icon: {
									internalClassName: 'ss__facet-palette-options__icon',
									...(0, l.s)({ disableStyles: C, icon: 'close-thin', color: 'white', size: '40%' }),
									theme: P?.theme,
									treePath: q,
								},
								image: { internalClassName: 'ss__facet-palette-options__image', ...(0, l.s)({ disableStyles: C }), theme: P?.theme, treePath: q },
								checkbox: {
									internalClassName: 'ss__facet-palette-options__checkbox',
									...(0, l.s)({ disableStyles: C }),
									theme: P?.theme,
									treePath: q,
								},
							},
							ee = (0, g.Z)(P, f),
							te = F || R?.values;
						return te?.length
							? (0, o.Y)(d._, {
									children: (0, o.Y)('div', {
										...ee,
										className: r()('ss__facet-palette-options', `ss__facet-palette-options--${j?.toLowerCase()}`, le, ie),
										children: te.map((a) => {
											const Z = {
													paletteOption: {
														attributes: {
															'aria-label': `${
																a.filtered
																	? `remove selected filter ${R?.label || ''} - ${a.label}`
																	: R?.label
																	? `filter by ${R?.label} - ${a.label}`
																	: `filter by ${a.label}`
															}`,
														},
													},
												},
												oe = W()(Z, P.lang || {}),
												X = (0, u.u)(oe, { facet: R, value: a });
											let I;
											S && (I = Object.fromEntries(Object.entries(S).map(([A, re]) => [A.toLowerCase(), re])));
											const G = I && I[a.label.toLowerCase()] && I[a.label.toLowerCase()].background ? I[a.label.toLowerCase()].background : a.value,
												Q =
													I && I[a.label.toLowerCase()] && I[a.label.toLowerCase()].backgroundImageUrl
														? I[a.label.toLowerCase()].backgroundImageUrl
														: void 0;
											let se = !1;
											if (G)
												try {
													se = (0, U.Mj)(G.toLowerCase()).isDark();
												} catch {}
											return (0, o.FD)(
												'a',
												{
													className: r()(
														'ss__facet-palette-options__option',
														{ 'ss__facet-palette-options__option--filtered': a.filtered },
														{ 'ss__facet-palette-options__option--dark': se },
														`ss__facet-palette-options__option--${j?.toLowerCase()}`
													),
													href: a.url?.link?.href,
													...(B ? { title: a.label } : {}),
													...N,
													onClick: (A) => {
														a.url?.link?.onClick(A), K && K(A);
													},
													'aria-atomic': 'false',
													...(z ? (0, O.l)(() => a?.preview && a.preview()) : {}),
													...X.paletteOption?.all,
													children: [
														!$ && (0, o.Y)(v.S, { ...J.checkbox, checked: a.filtered, disableA11y: !0, ...X.paletteOption.attributes }),
														(0, o.Y)('div', {
															className: 'ss__facet-palette-options__option__wrapper',
															children: (0, o.FD)('div', {
																className: r()(
																	'ss__facet-palette-options__option__palette',
																	`ss__facet-palette-options__option__palette--${t.p(a.value)}`,
																	{ 'ss__facet-palette-options__option__palette--image': Q }
																),
																style: { background: G },
																children: [
																	Q ? (0, o.Y)(m._, { ...J.image, src: Q, alt: a.label || a.value.toString() }) : null,
																	!V && a.filtered && j?.toLowerCase() == 'grid' && (0, o.Y)(_.I, { ...J.icon }),
																],
															}),
														}),
														!B &&
															(0, o.Y)('span', {
																className: 'ss__facet-palette-options__option__value',
																children: I?.[a.label.toLowerCase()]?.label ?? a.label,
															}),
														!Y &&
															a?.count > 0 &&
															(0, o.FD)('span', { className: 'ss__facet-palette-options__option__value__count', children: ['(', a.count, ')'] }),
													],
												},
												a.value
											);
										}),
									}),
							  })
							: null;
					});
				e.d(c, ['P', 0, E]);
			},
			'./components/src/hooks/useA11y.tsx'(D, c, e) {
				'use strict';
				e.d(c, { iy: () => p });
				const o = 9,
					n = 27,
					s = 'ss-a11y',
					r =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function p(t, l, M, g) {
					const _ = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${_}`)) {
						const d = document.createElement('style');
						(d.type = 'text/css'),
							(d.id = _),
							(d.innerHTML = `[${s}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(d);
					}
					t &&
						!t.attributes?.[s] &&
						(t.setAttribute(s, !0),
						t.setAttribute('tabIndex', `${l || 0}`),
						t.addEventListener('keydown', (d) => {
							(d.code === 'Space' || d.code === 'Enter') && t.click();
						}),
						M &&
							t.addEventListener('keydown', function (d) {
								const y = t.querySelectorAll(r),
									h = y[0],
									O = y[y.length - 1];
								if (d.keyCode == n) {
									t.focus(), g && g(d), d.preventDefault(), d.stopPropagation();
									return;
								}
								(d.key === 'Tab' || d.keyCode === o) &&
									(d.shiftKey
										? document.activeElement === h && (O.focus(), d.preventDefault())
										: document.activeElement === O && (h.focus(), d.preventDefault()));
							}));
				}
				e.d(c, ['DH', 0, r, 'aZ', 0, s]);
			},
			'./components/src/hooks/useLang.tsx'(D, c, e) {
				'use strict';
				const o = (n, s) => {
					const r = {};
					return (
						Object.keys(n).forEach((p) => {
							const t = n && n[p],
								l = {};
							t &&
								(t?.value &&
									(typeof t.value == 'function'
										? (l.value = { 'ss-lang': p, dangerouslySetInnerHTML: { __html: t.value(s) } })
										: (l.value = { 'ss-lang': p, dangerouslySetInnerHTML: { __html: t.value } })),
								t?.attributes &&
									Object.keys(t?.attributes).length &&
									((l.attributes = { 'ss-lang': p }),
									t?.attributes?.['aria-label'] &&
										(typeof t.attributes?.['aria-label'] == 'function'
											? (l.attributes['aria-label'] = t.attributes['aria-label'](s))
											: (l.attributes['aria-label'] = t.attributes['aria-label'])),
									t?.attributes?.['aria-valuetext'] &&
										(typeof t.attributes?.['aria-valuetext'] == 'function'
											? (l.attributes['aria-valuetext'] = t.attributes['aria-valuetext'](s))
											: (l.attributes['aria-valuetext'] = t.attributes['aria-valuetext'])),
									t?.attributes?.title &&
										(typeof t.attributes?.title == 'function'
											? (l.attributes.title = t.attributes.title(s))
											: (l.attributes.title = t.attributes.title)),
									t?.attributes?.alt &&
										(typeof t.attributes?.alt == 'function' ? (l.attributes.alt = t.attributes.alt(s)) : (l.attributes.alt = t.attributes.alt)),
									t?.attributes?.placeholder &&
										(typeof t.attributes?.placeholder == 'function'
											? (l.attributes.placeholder = t.attributes.placeholder(s))
											: (l.attributes.placeholder = t.attributes.placeholder))),
								(l.all = { ...l.value, ...l.attributes, 'ss-lang': p })),
								(r[p] = l);
						}),
						r
					);
				};
				e.d(c, ['u', 0, o]);
			},
			'./components/src/toolbox/createHoverProps/createHoverProps.ts'(D, c, e) {
				'use strict';
				const o = (n, s = { delay: 333, focusElem: !0 }) => {
					let r;
					return {
						onMouseEnter: (p) => {
							clearTimeout(r),
								(r = window.setTimeout(() => {
									s.focusElem && p.target.focus(), n && n();
								}, s.delay || 333));
						},
						onMouseLeave: () => {
							clearTimeout(r);
						},
					};
				};
				e.d(c, ['l', 0, o]);
			},
			'./components/src/utilities/componentArgs.ts'(D, c, e) {
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
				e.d(c, ['F', 0, o]);
			},
			'./components/src/utilities/defined.ts'(D, c, e) {
				'use strict';
				e.d(c, { s: () => o });
				function o(n) {
					const s = {};
					return (
						Object.keys(n).map((r) => {
							n[r] !== void 0 && (s[r] = n[r]);
						}),
						s
					);
				}
			},
			'./components/src/utilities/snapify.ts'(D, c, e) {
				'use strict';
				e.d(c, { p: () => w });
				var o = e('../../node_modules/mobx/dist/mobx.esm.js'),
					n = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					s = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					r = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					p = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					t = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					l = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					M = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					g = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					_ = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					d = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					y = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					h = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					O = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					v = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, o.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const u = {},
					T = { globals: { siteId: 'atkzs2' } };
				class w {
					static recommendation(f) {
						const E = f.id;
						if (u[E]) return u[E];
						const i = (u[E] = U({ client: T, controller: f }));
						return (
							i.on('afterStore', async ({ controller: b }, x) => {
								b.log.debug('controller', b), b.log.debug('store', b.store.toJSON()), await x();
							}),
							i.init(),
							i
						);
					}
					static autocomplete(f) {
						const E = f.id;
						if (u[E]) return u[E];
						const i = (u[E] = L({ client: T, controller: f }));
						return (
							i.on('afterStore', async ({ controller: b }, x) => {
								b.log.debug('controller', b), b.log.debug('store', b.store.toJSON()), await x();
							}),
							i.init(),
							i
						);
					}
					static search(f) {
						const E = f.id;
						if (u[E]) return u[E];
						const i = (u[E] = W({ client: T, controller: f }));
						return (
							i.on('afterStore', async ({ controller: b }, x) => {
								b.log.debug('controller', b), b.log.debug('store', b.store.toJSON()), await x();
							}),
							i.init(),
							i
						);
					}
				}
				function W(m) {
					const f = new g.V(new d.E({ settings: { coreType: 'query', corePrefix: m.controller.id } }), _.X);
					return new n.Tp(m.controller, {
						client: new p.K(m.client.globals, m.client.config),
						store: new l.U(m.controller, { urlManager: f }),
						urlManager: f,
						eventManager: new y.E(),
						profiler: new h.U(),
						logger: new O.V(),
						tracker: new v.J(m.client.globals),
					});
				}
				function U(m) {
					const f = new g.V(new d.E(), _.X).detach(!0);
					return new r.c(m.controller, {
						client: new p.K(m.client.globals, m.client.config),
						store: new M.t(m.controller, { urlManager: f }),
						urlManager: f,
						eventManager: new y.E(),
						profiler: new h.U(),
						logger: new O.V(),
						tracker: new v.J(m.client.globals),
					});
				}
				function L(m) {
					const f = new g.V(new d.E(), _.X).detach();
					return new s.Z(m.controller, {
						client: new p.K(m.client.globals, m.client.config),
						store: new t.Y(m.controller, { urlManager: f }),
						urlManager: f,
						eventManager: new y.E(),
						profiler: new h.U(),
						logger: new O.V(),
						tracker: new v.J(m.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(D, c, e) {
				'use strict';
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const s = 'prism-block',
					r = (p) => {
						const t = (0, n.li)(null);
						return (
							(0, n.vJ)(() => {
								t.current && p.className?.includes('lang-') && !p.className?.includes(s) && window?.Prism?.highlightElement(t.current);
							}, [p.className, p.children, t]),
							(0, o.Y)('code', { ...p, ref: t, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(c, ['Z', 0, r]);
			},
			'../../node_modules/colord/plugins/names.mjs'(D, c, e) {
				'use strict';
				e.d(c, { A: () => o }), e.dn(o);
				function o(n, s) {
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
					for (var t in r) p[r[t]] = t;
					var l = {};
					(n.prototype.toName = function (M) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var g,
							_,
							d = p[this.toHex()];
						if (d) return d;
						if (M?.closest) {
							var y = this.toRgb(),
								h = 1 / 0,
								O = 'black';
							if (!l.length) for (var v in r) l[v] = new n(r[v]).toRgb();
							for (var u in r) {
								var T = ((g = y), (_ = l[u]), Math.pow(g.r - _.r, 2) + Math.pow(g.g - _.g, 2) + Math.pow(g.b - _.b, 2));
								T < h && ((h = T), (O = u));
							}
							return O;
						}
					}),
						s.string.push([
							function (M) {
								var g = M.toLowerCase(),
									_ = g === 'transparent' ? '#0000' : r[g];
								return _ ? new n(_).toRgb() : null;
							},
							'name',
						]);
				}
			},
			'../../node_modules/memoizerific sync recursive'(D) {
				function c(e) {
					const o = new Error("Cannot find module '" + e + "'");
					throw ((o.code = 'MODULE_NOT_FOUND'), o);
				}
				(c.keys = () => []), (c.resolve = c), (c.id = '../../node_modules/memoizerific sync recursive'), (D.exports = c);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-FacetPaletteOptions-FacetPaletteOptions-stories.863d724c.iframe.bundle.js.map
