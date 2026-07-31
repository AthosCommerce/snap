(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[6691],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(D, c, e) {
				'use strict';
				e.d(c, { p: () => t });
				function t(n) {
					if (typeof n != 'string') return n;
					let l = n.toLowerCase();
					return (l = l.replace(/[^\w\s]/g, '').trim()), (l = l.replace(/\s/g, '-')), l;
				}
			},
			'./components/src/components/Molecules/FacetPaletteOptions/FacetPaletteOptions.stories.tsx'(D, c, e) {
				'use strict';
				e.r(c), e.d(c, { Default: () => y, List: () => g, __namedExportsOrder: () => x, default: () => a });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/mobx-react-lite/es/index.js'),
					l = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					r = e('./components/src/components/Molecules/FacetPaletteOptions/FacetPaletteOptions.tsx'),
					p = e('./components/src/utilities/storybook.tsx'),
					m = e('./components/src/utilities/componentArgs.ts'),
					b = e('./components/src/utilities/snapify.ts');
				const o = `# Facet Palette Options

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



## Lang

The \`lang\` prop allows you to override translatable text strings used by the FacetPaletteOptions component. All lang entries support a \`value\` (static string or function) and \`attributes\` (e.g. \`aria-label\`).

| Lang Key | Description | Data Provided |
|---|---|---|
| \`paletteOption\` | Palette option element text/attributes | \`facet\` (ValueFacet), \`value\` (FacetValue) |

### Example

\`\`\`tsx
<FacetPaletteOptions
	values={facet.values}
	lang={{
		paletteOption: {
			attributes: {
				'aria-label': (data) => \`\${data.value.filtered ? 'remove' : 'apply'} filter \${data.facet?.label} - \${data.value.label}\`,
			},
		},
	}}
/>
\`\`\`
`,
					a = {
						title: 'Molecules/FacetPaletteOptions',
						component: r.P,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(l.oz, { options: { overrides: { code: p.Z } }, children: o }), (0, t.Y)(l.uY, { story: l.h1 })],
									}),
							},
						},
						decorators: [(E) => (0, t.Y)(E, {})],
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
							...m.F,
						},
					},
					f = b.p.search({ id: 'FacetPaletteOptions', globals: { siteId: 'atkzs2' } }),
					d = (0, n.PA)(({ args: E, controller: _ }) => {
						const T = _?.store?.facets.filter((w) => w.field == 'color').pop();
						return (0, t.Y)(r.P, { ...E, values: T.values });
					}),
					y = (E, { loaded: { controller: _ } }) =>
						(0, t.Y)('div', { style: { maxWidth: E?.horizontal ? '1200px' : '500px' }, children: (0, t.Y)(d, { args: E, controller: _ }) });
				y.loaders = [async () => (await f.search(), { controller: f })];
				const g = (E, { loaded: { controller: _ } }) =>
					(0, t.Y)('div', { style: { maxWidth: E?.horizontal ? '1200px' : '500px' }, children: (0, t.Y)(d, { args: E, controller: _ }) });
				(g.args = { layout: 'list', hideCount: !1, hideCheckbox: !1 }),
					(g.loaders = [async () => (await f.search(), { controller: f })]),
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
					(g.parameters = {
						...g.parameters,
						docs: {
							...g.parameters?.docs,
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
								...g.parameters?.docs?.source,
							},
						},
					});
				const x = ['Default', 'List'];
			},
			'./components/src/components/Atoms/Image/Image.tsx'(D, c, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/classnames/index.js'),
					p = e.n(r),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					b = e('./components/src/providers/cache.tsx'),
					o = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					a = e('./components/src/providers/treePath.tsx'),
					f = e('./components/src/utilities/mergeProps.ts'),
					d = e('./components/src/utilities/mergeStyles.ts'),
					y = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const g = '//cdn.athoscommerce.net/snap/images/fallback.png',
					x = ({ height: _ }) =>
						(0, l.AH)({
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							height: _ || 'auto',
							'& img': { flexShrink: '0', objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' },
							'&.ss__image--hidden': { '& img': { visibility: 'hidden' } },
						}),
					E = (0, m.PA)((_) => {
						const T = (0, o.u)(),
							w = (0, a.LU)(),
							W = { fallback: g, lazy: !0, treePath: w },
							U = (0, f.v6)('image', T, W, _),
							{
								alt: L,
								src: u,
								fallback: h,
								title: P,
								hoverSrc: i,
								lazy: v,
								onMouseOver: M,
								onMouseOut: k,
								onError: O,
								onLoad: F,
								onClick: B,
								className: j,
								internalClassName: $,
							} = U,
							{ overrideElement: V, shouldRenderDefault: S } = (0, y._)('image', U);
						if (!S) return V;
						const [Y, K] = (0, n.J0)(!1),
							[z, N] = (0, n.J0)(!1),
							R = (0, n.li)('');
						(0, n.vJ)(() => {
							R.current = u;
						}),
							R.current && R.current != u && K(!1);
						const H = (0, d.Z)(U, x);
						return (0, t.Y)(b._, {
							children: (0, t.Y)('div', {
								...H,
								className: p()('ss__image', { 'ss__image--hidden': !Y }, j, $),
								children: (0, t.Y)('img', {
									src: (z ? i : u) || h,
									alt: L,
									title: P || L,
									loading: v ? 'lazy' : void 0,
									onLoad: (C) => {
										K(!0), F && F(C);
									},
									onClick: (C) => B && B(C),
									onError: (C) => {
										(C.target.src = h || ''), O && O(C);
									},
									onMouseOver: (C) => {
										i && N(!0), M && M(C);
									},
									onMouseOut: (C) => {
										i && N(!1), k && k(C);
									},
								}),
							}),
						});
					});
				e.d(c, ['_', 0, E, 't', 0, g]);
			},
			'./components/src/components/Molecules/Checkbox/Checkbox.tsx'(D, c, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					l = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = e('../../node_modules/classnames/index.js'),
					p = e.n(r),
					m = e('../../node_modules/mobx-react-lite/es/index.js'),
					b = e('./components/src/utilities/defined.ts'),
					o = e('./components/src/utilities/mergeProps.ts'),
					a = e('./components/src/utilities/mergeStyles.ts'),
					f = e('./components/src/providers/cache.tsx'),
					d = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					y = e('./components/src/providers/treePath.tsx'),
					g = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					x = e('./components/src/hooks/useA11y.tsx'),
					E = e('./components/src/hooks/useLang.tsx'),
					_ = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					T = e('../../node_modules/deepmerge/dist/cjs.js'),
					w = e.n(T);
				const W = ({ size: L, color: u, theme: h, native: P }) => {
						const i = isNaN(Number(L)) ? L : `${L}px`;
						return P
							? (0, l.AH)({})
							: (0, l.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									justifyContent: 'center',
									height: i,
									width: i,
									border: `1px solid ${u || h?.variables?.colors?.primary || '#333'}`,
									'&.ss__checkbox--disabled': { opacity: 0.7 },
									'& .ss__checkbox__empty': { display: 'inline-block', width: `calc(${L} - 30%)`, height: `calc(${L} - 30%)` },
							  });
					},
					U = (0, m.PA)((L) => {
						const u = (0, d.u)(),
							P = { size: '12px', startChecked: !1, disableA11y: !1, treePath: (0, y.LU)() },
							i = (0, o.v6)('checkbox', u, P, L),
							{
								checked: v,
								color: M,
								disabled: k,
								icon: O,
								iconColor: F,
								onClick: B,
								size: j,
								startChecked: $,
								native: V,
								disableA11y: S,
								disableStyles: Y,
								className: K,
								internalClassName: z,
								theme: N,
								treePath: R,
								lang: H,
								style: C,
								styleScript: re,
								themeStyleScript: ie,
								name: q,
								...se
							} = i,
							{ overrideElement: ne, shouldRenderDefault: J } = (0, _._)('checkbox', i);
						if (!J) return ne;
						const ee = isNaN(Number(j)) ? j : `${j}px`,
							te = {
								icon: {
									internalClassName: 'ss__checkbox__icon',
									icon: 'check-thin',
									...(0, b.s)({ color: F || M || N?.variables?.colors?.primary, disableStyles: Y, icon: O, size: ee && `calc(${ee} - 30%)` }),
									theme: i.theme,
									treePath: R,
								},
							};
						let s, Z;
						const oe = v === void 0;
						oe ? ([s, Z] = (0, n.J0)($)) : (s = v);
						const X = (A) => {
								k || (oe && Z && Z((le) => !le), B && B(A));
							},
							I = (0, a.Z)(i, W),
							G = { checkbox: {} },
							Q = w()(G, H || {}),
							ae = (0, E.u)(Q, { checkedState: s, disabled: k }, { activeBreakpoint: u?.activeBreakpoint });
						return (0, t.Y)(f._, {
							children: V
								? (0, t.Y)('input', {
										...I,
										className: p()('ss__checkbox', 'ss__checkbox--native', { 'ss__checkbox--disabled': k, 'ss__checkbox--active': s }, K, z),
										type: 'checkbox',
										'aria-checked': s,
										onClick: (A) => X(A),
										disabled: k,
										checked: s,
								  })
								: (0, t.Y)('span', {
										...I,
										className: p()('ss__checkbox', { 'ss__checkbox--disabled': k, 'ss__checkbox--active': s }, K, z),
										onClick: (A) => X(A),
										ref: (A) => (S ? null : (0, x.iy)(A)),
										'aria-disabled': k,
										role: 'checkbox',
										'aria-checked': s,
										...se,
										...ae.checkbox.all,
										children: s
											? (0, t.Y)(g.I, { ...te.icon, ...(typeof O == 'string' ? { icon: O } : O) })
											: (0, t.Y)('span', { className: 'ss__checkbox__empty' }),
								  }),
						});
					});
				e.d(c, ['S', 0, U]);
			},
			'./components/src/components/Molecules/FacetPaletteOptions/FacetPaletteOptions.tsx'(D, c, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					l = e('../../node_modules/classnames/index.js'),
					r = e.n(l),
					p = e('../../node_modules/mobx-react-lite/es/index.js'),
					m = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					b = e('./components/src/utilities/defined.ts'),
					o = e('./components/src/utilities/mergeProps.ts'),
					a = e('./components/src/utilities/mergeStyles.ts'),
					f = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					d = e('./components/src/providers/cache.tsx'),
					y = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					g = e('./components/src/providers/treePath.tsx'),
					x = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					E = e('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
					_ = e('./components/src/hooks/useLang.tsx'),
					T = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					w = e('../../node_modules/deepmerge/dist/cjs.js'),
					W = e.n(w),
					U = e('../../node_modules/colord/index.mjs'),
					L = e('../../node_modules/colord/plugins/names.mjs'),
					u = e('./components/src/components/Atoms/Image/Image.tsx');
				(0, U.X$)([L.A]);
				const h = ({ columns: i, gridSize: v, gapSize: M, horizontal: k, theme: O }) =>
						(0, n.AH)({
							display: 'flex',
							flexFlow: 'row wrap',
							gridTemplateColumns: i ? `repeat(${i}, calc((100% - (${i - 1} * ${M}))/ ${i}))` : `repeat(auto-fill, minmax(${v}, 1fr))`,
							gap: M,
							'.ss__facet-palette-options__option--list': { display: 'flex', flexDirection: 'row' },
							'.ss__facet-palette-options__option': {
								width: `calc(100% / ${i} - ${2 * Math.round((i + 2) / 2)}px )`,
								marginRight: M,
								marginBottom: M,
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
										borderColor: O?.variables?.colors?.primary || '#333 !important',
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
						const v = (0, y.u)(),
							M = (0, g.LU)(),
							k = {
								columns: 4,
								layout: 'grid',
								gridSize: '45px',
								gapSize: i.layout == 'list' ? '2px' : '8px',
								hideCount: !0,
								hideCheckbox: !0,
								treePath: M,
							},
							O = (0, o.v6)('facetPaletteOptions', v, k, i),
							{
								values: F,
								hideLabel: B,
								layout: j,
								hideCount: $,
								hideCheckbox: V,
								colorMapping: S,
								hideIcon: Y,
								onClick: K,
								previewOnFocus: z,
								valueProps: N,
								facet: R,
								horizontal: H,
								disableStyles: C,
								className: re,
								internalClassName: ie,
								treePath: q,
							} = O,
							{ overrideElement: se, shouldRenderDefault: ne } = (0, T._)('facetPaletteOptions', O);
						if (!ne) return se;
						H && (O.columns = 0);
						const J = {
								icon: {
									internalClassName: 'ss__facet-palette-options__icon',
									...(0, b.s)({ disableStyles: C, icon: 'close-thin', color: 'white', size: '40%' }),
									theme: O?.theme,
									treePath: q,
								},
								image: { internalClassName: 'ss__facet-palette-options__image', ...(0, b.s)({ disableStyles: C }), theme: O?.theme, treePath: q },
								checkbox: {
									internalClassName: 'ss__facet-palette-options__checkbox',
									...(0, b.s)({ disableStyles: C }),
									theme: O?.theme,
									treePath: q,
								},
							},
							ee = (0, a.Z)(O, h),
							te = F || R?.values;
						return te?.length
							? (0, t.Y)(d._, {
									children: (0, t.Y)('div', {
										...ee,
										className: r()('ss__facet-palette-options', `ss__facet-palette-options--${j?.toLowerCase()}`, re, ie),
										children: te.map((s) => {
											const Z = {
													paletteOption: {
														attributes: {
															'aria-label': `${
																s.filtered
																	? `remove selected filter ${R?.label || ''} - ${s.label}`
																	: R?.label
																	? `filter by ${R?.label} - ${s.label}`
																	: `filter by ${s.label}`
															}`,
														},
													},
												},
												oe = W()(Z, O.lang || {}),
												X = (0, _.u)(oe, { facet: R, value: s }, { activeBreakpoint: v?.activeBreakpoint });
											let I;
											S && (I = Object.fromEntries(Object.entries(S).map(([A, le]) => [A.toLowerCase(), le])));
											const G = I && I[s.label.toLowerCase()] && I[s.label.toLowerCase()].background ? I[s.label.toLowerCase()].background : s.value,
												Q =
													I && I[s.label.toLowerCase()] && I[s.label.toLowerCase()].backgroundImageUrl
														? I[s.label.toLowerCase()].backgroundImageUrl
														: void 0;
											let ae = !1;
											if (G)
												try {
													ae = (0, U.Mj)(G.toLowerCase()).isDark();
												} catch {}
											return (0, t.FD)(
												'a',
												{
													className: r()(
														'ss__facet-palette-options__option',
														{ 'ss__facet-palette-options__option--filtered': s.filtered },
														{ 'ss__facet-palette-options__option--dark': ae },
														`ss__facet-palette-options__option--${j?.toLowerCase()}`
													),
													href: s.url?.link?.href,
													...(B ? { title: s.label } : {}),
													...N,
													onClick: (A) => {
														s.url?.link?.onClick(A), K && K(A);
													},
													'aria-atomic': 'false',
													...(z ? (0, x.l)(() => s?.preview && s.preview()) : {}),
													...X.paletteOption?.all,
													children: [
														!V && (0, t.Y)(E.S, { ...J.checkbox, checked: s.filtered, disableA11y: !0, ...X.paletteOption.attributes }),
														(0, t.Y)('div', {
															className: 'ss__facet-palette-options__option__wrapper',
															children: (0, t.FD)('div', {
																className: r()(
																	'ss__facet-palette-options__option__palette',
																	`ss__facet-palette-options__option__palette--${m.p(s.value)}`,
																	{ 'ss__facet-palette-options__option__palette--image': Q }
																),
																style: { background: G },
																children: [
																	Q ? (0, t.Y)(u._, { ...J.image, src: Q, alt: s.label || s.value.toString() }) : null,
																	!Y && s.filtered && j?.toLowerCase() == 'grid' && (0, t.Y)(f.I, { ...J.icon }),
																],
															}),
														}),
														!B &&
															(0, t.Y)('span', {
																className: 'ss__facet-palette-options__option__value',
																children: I?.[s.label.toLowerCase()]?.label ?? s.label,
															}),
														!$ &&
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
				e.d(c, ['P', 0, P]);
			},
			'./components/src/hooks/useA11y.tsx'(D, c, e) {
				'use strict';
				e.d(c, { iy: () => p });
				const t = 9,
					n = 27,
					l = 'ss-a11y',
					r =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function p(m, b, o, a) {
					const f = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${f}`)) {
						const d = document.createElement('style');
						(d.type = 'text/css'),
							(d.id = f),
							(d.innerHTML = `[${l}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(d);
					}
					m &&
						!m.attributes?.[l] &&
						(m.setAttribute(l, !0),
						m.setAttribute('tabIndex', `${b || 0}`),
						m.addEventListener('keydown', (d) => {
							(d.code === 'Space' || d.code === 'Enter') && m.click();
						}),
						o &&
							m.addEventListener('keydown', function (d) {
								const y = m.querySelectorAll(r),
									g = y[0],
									x = y[y.length - 1];
								if (d.keyCode == n) {
									m.focus(), a && a(d), d.preventDefault(), d.stopPropagation();
									return;
								}
								(d.key === 'Tab' || d.keyCode === t) &&
									(d.shiftKey
										? document.activeElement === g && (x.focus(), d.preventDefault())
										: document.activeElement === x && (g.focus(), d.preventDefault()));
							}));
				}
				e.d(c, ['DH', 0, r, 'aZ', 0, l]);
			},
			'./components/src/hooks/useLang.tsx'(D, c, e) {
				'use strict';
				const t = (n, l, r) => {
					const p = r ? { ...l, ...r } : l,
						m = {};
					return (
						Object.keys(n).forEach((b) => {
							const o = n && n[b],
								a = {};
							o &&
								(o?.value &&
									(typeof o.value == 'function'
										? (a.value = { 'ss-lang': b, dangerouslySetInnerHTML: { __html: o.value(p) } })
										: (a.value = { 'ss-lang': b, dangerouslySetInnerHTML: { __html: o.value } })),
								o?.attributes &&
									Object.keys(o?.attributes).length &&
									((a.attributes = { 'ss-lang': b }),
									o?.attributes?.['aria-label'] &&
										(typeof o.attributes?.['aria-label'] == 'function'
											? (a.attributes['aria-label'] = o.attributes['aria-label'](p))
											: (a.attributes['aria-label'] = o.attributes['aria-label'])),
									o?.attributes?.['aria-valuetext'] &&
										(typeof o.attributes?.['aria-valuetext'] == 'function'
											? (a.attributes['aria-valuetext'] = o.attributes['aria-valuetext'](p))
											: (a.attributes['aria-valuetext'] = o.attributes['aria-valuetext'])),
									o?.attributes?.title &&
										(typeof o.attributes?.title == 'function'
											? (a.attributes.title = o.attributes.title(p))
											: (a.attributes.title = o.attributes.title)),
									o?.attributes?.alt &&
										(typeof o.attributes?.alt == 'function' ? (a.attributes.alt = o.attributes.alt(p)) : (a.attributes.alt = o.attributes.alt)),
									o?.attributes?.placeholder &&
										(typeof o.attributes?.placeholder == 'function'
											? (a.attributes.placeholder = o.attributes.placeholder(p))
											: (a.attributes.placeholder = o.attributes.placeholder))),
								(a.all = { ...a.value, ...a.attributes, 'ss-lang': b })),
								(m[b] = a);
						}),
						m
					);
				};
				e.d(c, ['u', 0, t]);
			},
			'./components/src/toolbox/createHoverProps/createHoverProps.ts'(D, c, e) {
				'use strict';
				const t = (n, l = { delay: 333, focusElem: !0 }) => {
					let r;
					return {
						onMouseEnter: (p) => {
							clearTimeout(r),
								(r = window.setTimeout(() => {
									l.focusElem && p.target.focus(), n && n();
								}, l.delay || 333));
						},
						onMouseLeave: () => {
							clearTimeout(r);
						},
					};
				};
				e.d(c, ['l', 0, t]);
			},
			'./components/src/utilities/componentArgs.ts'(D, c, e) {
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
				e.d(c, ['F', 0, t]);
			},
			'./components/src/utilities/defined.ts'(D, c, e) {
				'use strict';
				e.d(c, { s: () => t });
				function t(n) {
					const l = {};
					return (
						Object.keys(n).map((r) => {
							n[r] !== void 0 && (l[r] = n[r]);
						}),
						l
					);
				}
			},
			'./components/src/utilities/snapify.ts'(D, c, e) {
				'use strict';
				e.d(c, { p: () => w });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					n = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					l = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					r = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					p = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					m = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					b = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					o = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					a = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					f = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					d = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					y = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					g = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					x = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					E = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const _ = {},
					T = { globals: { siteId: 'atkzs2' } };
				class w {
					static recommendation(h) {
						const P = h.id;
						if (_[P]) return _[P];
						const i = (_[P] = U({ client: T, controller: h }));
						return (
							i.on('afterStore', async ({ controller: v }, M) => {
								v.log.debug('controller', v), v.log.debug('store', v.store.toJSON()), await M();
							}),
							i.init(),
							i
						);
					}
					static autocomplete(h) {
						const P = h.id;
						if (_[P]) return _[P];
						const i = (_[P] = L({ client: T, controller: h }));
						return (
							i.on('afterStore', async ({ controller: v }, M) => {
								v.log.debug('controller', v), v.log.debug('store', v.store.toJSON()), await M();
							}),
							i.init(),
							i
						);
					}
					static search(h) {
						const P = h.id;
						if (_[P]) return _[P];
						const i = (_[P] = W({ client: T, controller: h }));
						return (
							i.on('afterStore', async ({ controller: v }, M) => {
								v.log.debug('controller', v), v.log.debug('store', v.store.toJSON()), await M();
							}),
							i.init(),
							i
						);
					}
				}
				function W(u) {
					const h = new a.V(new d.E({ settings: { coreType: 'query', corePrefix: u.controller.id } }), f.X);
					return new n.Tp(u.controller, {
						client: new p.K(u.client.globals, u.client.config),
						store: new b.U(u.controller, { urlManager: h }),
						urlManager: h,
						eventManager: new y.E(),
						profiler: new g.U(),
						logger: new x.V(),
						tracker: new E.J(u.client.globals),
					});
				}
				function U(u) {
					const h = new a.V(new d.E(), f.X).detach(!0);
					return new r.c(u.controller, {
						client: new p.K(u.client.globals, u.client.config),
						store: new o.t(u.controller, { urlManager: h }),
						urlManager: h,
						eventManager: new y.E(),
						profiler: new g.U(),
						logger: new x.V(),
						tracker: new E.J(u.client.globals),
					});
				}
				function L(u) {
					const h = new a.V(new d.E(), f.X).detach();
					return new l.Z(u.controller, {
						client: new p.K(u.client.globals, u.client.config),
						store: new m.Y(u.controller, { urlManager: h }),
						urlManager: h,
						eventManager: new y.E(),
						profiler: new g.U(),
						logger: new x.V(),
						tracker: new E.J(u.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(D, c, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const l = 'prism-block',
					r = (p) => {
						const m = (0, n.li)(null);
						return (
							(0, n.vJ)(() => {
								m.current && p.className?.includes('lang-') && !p.className?.includes(l) && window?.Prism?.highlightElement(m.current);
							}, [p.className, p.children, m]),
							(0, t.Y)('code', { ...p, ref: m, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(c, ['Z', 0, r]);
			},
			'../../node_modules/colord/plugins/names.mjs'(D, c, e) {
				'use strict';
				e.d(c, { A: () => t }), e.dn(t);
				function t(n, l) {
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
					for (var m in r) p[r[m]] = m;
					var b = {};
					(n.prototype.toName = function (o) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var a,
							f,
							d = p[this.toHex()];
						if (d) return d;
						if (o?.closest) {
							var y = this.toRgb(),
								g = 1 / 0,
								x = 'black';
							if (!b.length) for (var E in r) b[E] = new n(r[E]).toRgb();
							for (var _ in r) {
								var T = ((a = y), (f = b[_]), Math.pow(a.r - f.r, 2) + Math.pow(a.g - f.g, 2) + Math.pow(a.b - f.b, 2));
								T < g && ((g = T), (x = _));
							}
							return x;
						}
					}),
						l.string.push([
							function (o) {
								var a = o.toLowerCase(),
									f = a === 'transparent' ? '#0000' : r[a];
								return f ? new n(f).toRgb() : null;
							},
							'name',
						]);
				}
			},
			'../../node_modules/memoizerific sync recursive'(D) {
				function c(e) {
					const t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(c.keys = () => []), (c.resolve = c), (c.id = '../../node_modules/memoizerific sync recursive'), (D.exports = c);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-FacetPaletteOptions-FacetPaletteOptions-stories.1ec2a149.iframe.bundle.js.map
