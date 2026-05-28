(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[6691],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(C, c, e) {
				'use strict';
				e.d(c, { p: () => t });
				function t(a) {
					if (typeof a != 'string') return a;
					let s = a.toLowerCase();
					return (s = s.replace(/[^\w\s]/g, '').trim()), (s = s.replace(/\s/g, '-')), s;
				}
			},
			'./components/src/components/Molecules/FacetPaletteOptions/FacetPaletteOptions.stories.tsx'(C, c, e) {
				'use strict';
				e.r(c), e.d(c, { Default: () => g, List: () => b, __namedExportsOrder: () => M, default: () => x });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/mobx-react-lite/es/index.js'),
					s = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					d = e('./components/src/components/Molecules/FacetPaletteOptions/FacetPaletteOptions.tsx'),
					p = e('./components/src/utilities/storybook.tsx'),
					o = e('./components/src/utilities/componentArgs.ts'),
					l = e('./components/src/utilities/snapify.ts');
				const L = `# Facet Palette Options

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
					x = {
						title: 'Molecules/FacetPaletteOptions',
						component: d.P,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(s.oz, { options: { overrides: { code: p.Z } }, children: L }), (0, t.Y)(s.uY, { story: s.h1 })],
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
							...o.F,
						},
					},
					P = l.p.search({ id: 'FacetPaletteOptions', globals: { siteId: 'atkzs2' } }),
					i = (0, a.PA)(({ args: E, controller: h }) => {
						const A = h?.store?.facets.filter((U) => U.field == 'color').pop();
						return (0, t.Y)(d.P, { ...E, values: A.values });
					}),
					g = (E, { loaded: { controller: h } }) =>
						(0, t.Y)('div', { style: { maxWidth: E?.horizontal ? '1200px' : '500px' }, children: (0, t.Y)(i, { args: E, controller: h }) });
				g.loaders = [async () => (await P.search(), { controller: P })];
				const b = (E, { loaded: { controller: h } }) =>
					(0, t.Y)('div', { style: { maxWidth: E?.horizontal ? '1200px' : '500px' }, children: (0, t.Y)(i, { args: E, controller: h }) });
				(b.args = { layout: 'list', hideCount: !1, hideCheckbox: !1 }),
					(b.loaders = [async () => (await P.search(), { controller: P })]),
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
					}),
					(b.parameters = {
						...b.parameters,
						docs: {
							...b.parameters?.docs,
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
								...b.parameters?.docs?.source,
							},
						},
					});
				const M = ['Default', 'List'];
			},
			'./components/src/components/Atoms/Image/Image.tsx'(C, c, e) {
				'use strict';
				e.d(c, { _: () => E, t: () => b });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					s = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					d = e('../../node_modules/classnames/index.js'),
					p = e.n(d),
					o = e('./components/src/providers/cache.tsx'),
					l = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					L = e('./components/src/providers/snap.tsx'),
					x = e('./components/src/providers/treePath.tsx'),
					P = e('./components/src/utilities/mergeProps.ts'),
					i = e('./components/src/utilities/mergeStyles.ts'),
					g = e('./components/src/hooks/useComponent.tsx');
				const b = '//cdn.athoscommerce.net/snap/images/fallback.png',
					M = ({ height: h }) =>
						(0, s.AH)({
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							height: h || 'auto',
							'& img': { flexShrink: '0', objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' },
							'&.ss__image--hidden': { '& img': { visibility: 'hidden' } },
						});
				function E(h) {
					const A = (0, l.u)(),
						U = (0, L.uk)(),
						w = (0, x.LU)(),
						z = { fallback: b, lazy: !0, treePath: w },
						R = (0, P.v6)('image', A, z, h),
						{
							alt: r,
							src: m,
							fallback: f,
							title: _,
							hoverSrc: u,
							lazy: v,
							onMouseOver: j,
							onMouseOut: K,
							onError: y,
							onLoad: B,
							onClick: N,
							className: W,
							internalClassName: Y,
							customComponent: $,
						} = R;
					if ($) {
						const O = (0, g.x)(U?.templates?.library.import.component.image || {}, $);
						if (O) return (0, t.Y)(O, { ...R });
					}
					const [H, J] = (0, a.J0)(!1),
						[Z, V] = (0, a.J0)(!1),
						F = (0, a.li)('');
					(0, a.vJ)(() => {
						F.current = m;
					}),
						F.current && F.current != m && J(!1);
					const k = (0, i.Z)(R, M);
					return (0, t.Y)(o._, {
						children: (0, t.Y)('div', {
							...k,
							className: p()('ss__image', { 'ss__image--hidden': !H }, W, Y),
							children: (0, t.Y)('img', {
								src: (Z ? u : m) || f,
								alt: r,
								title: _ || r,
								loading: v ? 'lazy' : void 0,
								onLoad: (O) => {
									J(!0), B && B(O);
								},
								onClick: (O) => N && N(O),
								onError: (O) => {
									(O.target.src = f || ''), y && y(O);
								},
								onMouseOver: (O) => {
									u && V(!0), j && j(O);
								},
								onMouseOut: (O) => {
									u && V(!1), K && K(O);
								},
							}),
						}),
					});
				}
			},
			'./components/src/components/Molecules/Checkbox/Checkbox.tsx'(C, c, e) {
				'use strict';
				e.d(c, { S: () => R });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					s = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					d = e('../../node_modules/classnames/index.js'),
					p = e.n(d),
					o = e('../../node_modules/mobx-react-lite/es/index.js'),
					l = e('./components/src/utilities/defined.ts'),
					L = e('./components/src/utilities/mergeProps.ts'),
					x = e('./components/src/utilities/mergeStyles.ts'),
					P = e('./components/src/providers/cache.tsx'),
					i = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					g = e('./components/src/providers/snap.tsx'),
					b = e('./components/src/providers/treePath.tsx'),
					M = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					E = e('./components/src/hooks/useA11y.tsx'),
					h = e('./components/src/hooks/useLang.tsx'),
					A = e('./components/src/hooks/useComponent.tsx'),
					U = e('../../node_modules/deepmerge/dist/cjs.js'),
					w = e.n(U);
				const z = ({ size: r, color: m, theme: f, native: _ }) => {
						const u = isNaN(Number(r)) ? r : `${r}px`;
						return _
							? (0, s.AH)({})
							: (0, s.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									justifyContent: 'center',
									height: u,
									width: u,
									border: `1px solid ${m || f?.variables?.colors?.primary || '#333'}`,
									'&.ss__checkbox--disabled': { opacity: 0.7 },
									'& .ss__checkbox__empty': { display: 'inline-block', width: `calc(${r} - 30%)`, height: `calc(${r} - 30%)` },
							  });
					},
					R = (0, o.PA)((r) => {
						const m = (0, i.u)(),
							f = (0, g.uk)(),
							u = { size: '12px', startChecked: !1, disableA11y: !1, treePath: (0, b.LU)() },
							v = (0, L.v6)('checkbox', m, u, r),
							{
								checked: j,
								color: K,
								disabled: y,
								icon: B,
								iconColor: N,
								onClick: W,
								size: Y,
								startChecked: $,
								native: H,
								disableA11y: J,
								disableStyles: Z,
								className: V,
								internalClassName: F,
								theme: k,
								treePath: O,
								lang: X,
								customComponent: oe,
								style: ce,
								styleScript: se,
								themeStyleScript: re,
								name: ne,
								...le
							} = v;
						if (oe) {
							const T = (0, A.x)(f?.templates?.library.import.component.checkbox || {}, oe);
							if (T) return (0, t.Y)(T, { ...v });
						}
						const Q = isNaN(Number(Y)) ? Y : `${Y}px`,
							n = {
								icon: {
									internalClassName: 'ss__checkbox__icon',
									icon: 'check-thin',
									...(0, l.s)({ color: N || K || k?.variables?.colors?.primary, disableStyles: Z, icon: B, size: Q && `calc(${Q} - 30%)` }),
									theme: v.theme,
									treePath: O,
								},
							};
						let I, q;
						const ee = j === void 0;
						ee ? ([I, q] = (0, a.J0)($)) : (I = j);
						const D = (T) => {
								y || (ee && q && q((ie) => !ie), W && W(T));
							},
							G = (0, x.Z)(v, z),
							te = { checkbox: {} },
							ae = w()(te, X || {}),
							S = (0, h.u)(ae, { checkedState: I, disabled: y });
						return (0, t.Y)(P._, {
							children: H
								? (0, t.Y)('input', {
										...G,
										className: p()('ss__checkbox', 'ss__checkbox--native', { 'ss__checkbox--disabled': y, 'ss__checkbox--active': I }, V, F),
										type: 'checkbox',
										'aria-checked': I,
										onClick: (T) => D(T),
										disabled: y,
										checked: I,
								  })
								: (0, t.Y)('span', {
										...G,
										className: p()('ss__checkbox', { 'ss__checkbox--disabled': y, 'ss__checkbox--active': I }, V, F),
										onClick: (T) => D(T),
										ref: (T) => (J ? null : (0, E.iy)(T)),
										'aria-disabled': y,
										role: 'checkbox',
										'aria-checked': I,
										...le,
										...S.checkbox.all,
										children: I
											? (0, t.Y)(M.I, { ...n.icon, ...(typeof B == 'string' ? { icon: B } : B) })
											: (0, t.Y)('span', { className: 'ss__checkbox__empty' }),
								  }),
						});
					});
			},
			'./components/src/components/Molecules/FacetPaletteOptions/FacetPaletteOptions.tsx'(C, c, e) {
				'use strict';
				e.d(c, { P: () => f });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = e('../../node_modules/classnames/index.js'),
					d = e.n(s),
					p = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					l = e('./components/src/utilities/defined.ts'),
					L = e('./components/src/utilities/mergeProps.ts'),
					x = e('./components/src/utilities/mergeStyles.ts'),
					P = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					i = e('./components/src/providers/cache.tsx'),
					g = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					b = e('./components/src/providers/snap.tsx'),
					M = e('./components/src/providers/treePath.tsx'),
					E = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					h = e('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
					A = e('./components/src/hooks/useLang.tsx'),
					U = e('./components/src/hooks/useComponent.tsx'),
					w = e('../../node_modules/deepmerge/dist/cjs.js'),
					z = e.n(w),
					R = e('../../node_modules/colord/index.mjs'),
					r = e('./components/src/components/Atoms/Image/Image.tsx');
				const m = ({ columns: _, gridSize: u, gapSize: v, horizontal: j, theme: K }) =>
						(0, a.AH)({
							display: 'flex',
							flexFlow: 'row wrap',
							gridTemplateColumns: _ ? `repeat(${_}, calc((100% - (${_ - 1} * ${v}))/ ${_}))` : `repeat(auto-fill, minmax(${u}, 1fr))`,
							gap: v,
							'.ss__facet-palette-options__option--list': { display: 'flex', flexDirection: 'row' },
							'.ss__facet-palette-options__option': {
								width: `calc(100% / ${_} - ${2 * Math.round((_ + 2) / 2)}px )`,
								marginRight: v,
								marginBottom: v,
								[`:nth-of-type(${_}n)`]: { marginRight: '0' },
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
										borderColor: K?.variables?.colors?.primary || '#333 !important',
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
					f = (0, p.PA)((_) => {
						const u = (0, g.u)(),
							v = (0, b.uk)(),
							j = (0, M.LU)(),
							K = {
								columns: 4,
								layout: 'grid',
								gridSize: '45px',
								gapSize: _.layout == 'list' ? '2px' : '8px',
								hideCount: !0,
								hideCheckbox: !0,
								treePath: j,
							},
							y = (0, L.v6)('facetPaletteOptions', u, K, _),
							{
								values: B,
								hideLabel: N,
								layout: W,
								hideCount: Y,
								hideCheckbox: $,
								colorMapping: H,
								hideIcon: J,
								onClick: Z,
								previewOnFocus: V,
								valueProps: F,
								facet: k,
								horizontal: O,
								disableStyles: X,
								className: oe,
								internalClassName: ce,
								treePath: se,
								customComponent: re,
							} = y;
						if (re) {
							const n = (0, U.x)(v?.templates?.library.import.component.facetPaletteOptions || {}, re);
							if (n) return (0, t.Y)(n, { ...y });
						}
						O && (y.columns = 0);
						const ne = {
								icon: {
									internalClassName: 'ss__facet-palette-options__icon',
									...(0, l.s)({ disableStyles: X, icon: 'close-thin', color: 'white', size: '40%' }),
									theme: y?.theme,
									treePath: se,
								},
								image: { internalClassName: 'ss__facet-palette-options__image', ...(0, l.s)({ disableStyles: X }), theme: y?.theme, treePath: se },
								checkbox: {
									internalClassName: 'ss__facet-palette-options__checkbox',
									...(0, l.s)({ disableStyles: X }),
									theme: y?.theme,
									treePath: se,
								},
							},
							le = (0, x.Z)(y, m),
							Q = B || k?.values;
						return Q?.length
							? (0, t.Y)(i._, {
									children: (0, t.Y)('div', {
										...le,
										className: d()('ss__facet-palette-options', `ss__facet-palette-options--${W?.toLowerCase()}`, oe, ce),
										children: Q.map((n) => {
											const I = {
													paletteOption: {
														attributes: {
															'aria-label': `${
																n.filtered
																	? `remove selected filter ${k?.label || ''} - ${n.label}`
																	: k?.label
																	? `filter by ${k?.label} - ${n.label}`
																	: `filter by ${n.label}`
															}`,
														},
													},
												},
												q = z()(I, y.lang || {}),
												ee = (0, A.u)(q, { facet: k, value: n });
											let D;
											H && (D = Object.fromEntries(Object.entries(H).map(([S, T]) => [S.toLowerCase(), T])));
											const G = D && D[n.label.toLowerCase()] && D[n.label.toLowerCase()].background ? D[n.label.toLowerCase()].background : n.value,
												te =
													D && D[n.label.toLowerCase()] && D[n.label.toLowerCase()].backgroundImageUrl
														? D[n.label.toLowerCase()].backgroundImageUrl
														: void 0;
											let ae = !1;
											if (G)
												try {
													ae = (0, R.Mj)(G.toLowerCase()).isDark();
												} catch {}
											return (0, t.FD)(
												'a',
												{
													className: d()(
														'ss__facet-palette-options__option',
														{ 'ss__facet-palette-options__option--filtered': n.filtered },
														{ 'ss__facet-palette-options__option--dark': ae },
														`ss__facet-palette-options__option--${W?.toLowerCase()}`
													),
													href: n.url?.link?.href,
													...(N ? { title: n.label } : {}),
													...F,
													onClick: (S) => {
														n.url?.link?.onClick(S), Z && Z(S);
													},
													'aria-atomic': 'false',
													...(V ? (0, E.l)(() => n?.preview && n.preview()) : {}),
													...ee.paletteOption?.all,
													children: [
														!$ && (0, t.Y)(h.S, { ...ne.checkbox, checked: n.filtered, disableA11y: !0, ...ee.paletteOption.attributes }),
														(0, t.Y)('div', {
															className: 'ss__facet-palette-options__option__wrapper',
															children: (0, t.FD)('div', {
																className: d()(
																	'ss__facet-palette-options__option__palette',
																	`ss__facet-palette-options__option__palette--${o.p(n.value)}`,
																	{ 'ss__facet-palette-options__option__palette--image': te }
																),
																style: { background: G },
																children: [
																	te ? (0, t.Y)(r._, { ...ne.image, src: te, alt: n.label || n.value.toString() }) : null,
																	!J && n.filtered && W?.toLowerCase() == 'grid' && (0, t.Y)(P.I, { ...ne.icon }),
																],
															}),
														}),
														!N &&
															(0, t.Y)('span', {
																className: 'ss__facet-palette-options__option__value',
																children: D?.[n.label.toLowerCase()]?.label ?? n.label,
															}),
														!Y &&
															n?.count > 0 &&
															(0, t.FD)('span', { className: 'ss__facet-palette-options__option__value__count', children: ['(', n.count, ')'] }),
													],
												},
												n.value
											);
										}),
									}),
							  })
							: null;
					});
			},
			'./components/src/hooks/useA11y.tsx'(C, c, e) {
				'use strict';
				e.d(c, { DH: () => d, aZ: () => s, iy: () => p });
				const t = 9,
					a = 27,
					s = 'ss-a11y',
					d =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function p(o, l, L, x) {
					const P = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${P}`)) {
						const i = document.createElement('style');
						(i.type = 'text/css'),
							(i.id = P),
							(i.innerHTML = `[${s}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(i);
					}
					o &&
						!o.attributes?.[s] &&
						(o.setAttribute(s, !0),
						o.setAttribute('tabIndex', `${l || 0}`),
						o.addEventListener('keydown', (i) => {
							(i.code === 'Space' || i.code === 'Enter') && o.click();
						}),
						L &&
							o.addEventListener('keydown', function (i) {
								const g = o.querySelectorAll(d),
									b = g[0],
									M = g[g.length - 1];
								if (i.keyCode == a) {
									o.focus(), x && x(i), i.preventDefault(), i.stopPropagation();
									return;
								}
								(i.key === 'Tab' || i.keyCode === t) &&
									(i.shiftKey
										? document.activeElement === b && (M.focus(), i.preventDefault())
										: document.activeElement === M && (b.focus(), i.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useLang.tsx'(C, c, e) {
				'use strict';
				e.d(c, { u: () => t });
				const t = (a, s) => {
					const d = {};
					return (
						Object.keys(a).forEach((p) => {
							const o = a && a[p],
								l = {};
							o &&
								(o?.value &&
									(typeof o.value == 'function'
										? (l.value = { 'ss-lang': p, dangerouslySetInnerHTML: { __html: o.value(s) } })
										: (l.value = { 'ss-lang': p, dangerouslySetInnerHTML: { __html: o.value } })),
								o?.attributes &&
									Object.keys(o?.attributes).length &&
									((l.attributes = { 'ss-lang': p }),
									o?.attributes?.['aria-label'] &&
										(typeof o.attributes?.['aria-label'] == 'function'
											? (l.attributes['aria-label'] = o.attributes['aria-label'](s))
											: (l.attributes['aria-label'] = o.attributes['aria-label'])),
									o?.attributes?.['aria-valuetext'] &&
										(typeof o.attributes?.['aria-valuetext'] == 'function'
											? (l.attributes['aria-valuetext'] = o.attributes['aria-valuetext'](s))
											: (l.attributes['aria-valuetext'] = o.attributes['aria-valuetext'])),
									o?.attributes?.title &&
										(typeof o.attributes?.title == 'function'
											? (l.attributes.title = o.attributes.title(s))
											: (l.attributes.title = o.attributes.title)),
									o?.attributes?.alt &&
										(typeof o.attributes?.alt == 'function' ? (l.attributes.alt = o.attributes.alt(s)) : (l.attributes.alt = o.attributes.alt)),
									o?.attributes?.placeholder &&
										(typeof o.attributes?.placeholder == 'function'
											? (l.attributes.placeholder = o.attributes.placeholder(s))
											: (l.attributes.placeholder = o.attributes.placeholder))),
								(l.all = { ...l.value, ...l.attributes, 'ss-lang': p })),
								(d[p] = l);
						}),
						d
					);
				};
			},
			'./components/src/toolbox/createHoverProps/createHoverProps.ts'(C, c, e) {
				'use strict';
				e.d(c, { l: () => t });
				const t = (a, s = { delay: 333, focusElem: !0 }) => {
					let d;
					return {
						onMouseEnter: (p) => {
							clearTimeout(d),
								(d = window.setTimeout(() => {
									s.focusElem && p.target.focus(), a && a();
								}, s.delay || 333));
						},
						onMouseLeave: () => {
							clearTimeout(d);
						},
					};
				};
			},
			'./components/src/utilities/componentArgs.ts'(C, c, e) {
				'use strict';
				e.d(c, { F: () => t });
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
			'./components/src/utilities/defined.ts'(C, c, e) {
				'use strict';
				e.d(c, { s: () => t });
				function t(a) {
					const s = {};
					return (
						Object.keys(a).map((d) => {
							a[d] !== void 0 && (s[d] = a[d]);
						}),
						s
					);
				}
			},
			'./components/src/utilities/snapify.ts'(C, c, e) {
				'use strict';
				e.d(c, { p: () => U });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					a = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					s = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					d = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					p = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					o = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					l = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					L = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					x = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					P = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					i = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					g = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					b = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					M = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					E = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const h = {},
					A = { globals: { siteId: 'atkzs2' } };
				class U {
					static recommendation(m) {
						const f = m.id;
						if (h[f]) return h[f];
						const _ = (h[f] = z({ client: A, controller: m }));
						return (
							_.on('afterStore', async ({ controller: u }, v) => {
								u.log.debug('controller', u), u.log.debug('store', u.store.toJSON()), await v();
							}),
							_.init(),
							_
						);
					}
					static autocomplete(m) {
						const f = m.id;
						if (h[f]) return h[f];
						const _ = (h[f] = R({ client: A, controller: m }));
						return (
							_.on('afterStore', async ({ controller: u }, v) => {
								u.log.debug('controller', u), u.log.debug('store', u.store.toJSON()), await v();
							}),
							_.init(),
							_
						);
					}
					static search(m) {
						const f = m.id;
						if (h[f]) return h[f];
						const _ = (h[f] = w({ client: A, controller: m }));
						return (
							_.on('afterStore', async ({ controller: u }, v) => {
								u.log.debug('controller', u), u.log.debug('store', u.store.toJSON()), await v();
							}),
							_.init(),
							_
						);
					}
				}
				function w(r) {
					const m = new x.V(new i.E({ settings: { coreType: 'query', corePrefix: r.controller.id } }), P.X);
					return new a.Tp(r.controller, {
						client: new p.K(r.client.globals, r.client.config),
						store: new l.U(r.controller, { urlManager: m }),
						urlManager: m,
						eventManager: new g.E(),
						profiler: new b.U(),
						logger: new M.V(),
						tracker: new E.J(r.client.globals),
					});
				}
				function z(r) {
					const m = new x.V(new i.E(), P.X).detach(!0);
					return new d.c(r.controller, {
						client: new p.K(r.client.globals, r.client.config),
						store: new L.t(r.controller, { urlManager: m }),
						urlManager: m,
						eventManager: new g.E(),
						profiler: new b.U(),
						logger: new M.V(),
						tracker: new E.J(r.client.globals),
					});
				}
				function R(r) {
					const m = new x.V(new i.E(), P.X).detach();
					return new s.Z(r.controller, {
						client: new p.K(r.client.globals, r.client.config),
						store: new o.Y(r.controller, { urlManager: m }),
						urlManager: m,
						eventManager: new g.E(),
						profiler: new b.U(),
						logger: new M.V(),
						tracker: new E.J(r.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(C, c, e) {
				'use strict';
				e.d(c, { Z: () => d });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const s = 'prism-block',
					d = (p) => {
						const o = (0, a.li)(null);
						return (
							(0, a.vJ)(() => {
								o.current && p.className?.includes('lang-') && !p.className?.includes(s) && window?.Prism?.highlightElement(o.current);
							}, [p.className, p.children, o]),
							(0, t.Y)('code', { ...p, ref: o, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(C) {
				function c(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(c.keys = () => []), (c.resolve = c), (c.id = '../../node_modules/memoizerific sync recursive'), (C.exports = c);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-FacetPaletteOptions-FacetPaletteOptions-stories.36023547.iframe.bundle.js.map
