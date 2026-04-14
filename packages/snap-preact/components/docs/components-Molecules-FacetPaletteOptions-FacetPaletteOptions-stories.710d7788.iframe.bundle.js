(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[6691],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(D, i, e) {
				'use strict';
				e.d(i, { p: () => t });
				function t(r) {
					if (typeof r != 'string') return r;
					let n = r.toLowerCase();
					return (n = n.replace(/[^\w\s]/g, '').trim()), (n = n.replace(/\s/g, '-')), n;
				}
			},
			'./components/src/components/Molecules/FacetPaletteOptions/FacetPaletteOptions.stories.tsx'(D, i, e) {
				'use strict';
				e.r(i), e.d(i, { Default: () => g, List: () => f, __namedExportsOrder: () => C, default: () => M });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = e('../../node_modules/mobx-react-lite/es/index.js'),
					n = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					m = e('./components/src/components/Molecules/FacetPaletteOptions/FacetPaletteOptions.tsx'),
					d = e('./components/src/utilities/storybook.tsx'),
					o = e('./components/src/utilities/componentArgs.ts'),
					c = e('./components/src/utilities/snapify.ts');
				const I = `# Facet Palette Options

Renders a grid of facet palette options. 

## Sub-components
- Icon

## Usage
\`\`\`jsx
import { FacetPaletteOptions } from '@athoscommerce/snap-preact/components';
\`\`\`

### values
The \`values\` prop specifies all facet values where the facet type is 'palette'. Overrides values passed via the facet prop. 

\`\`\`jsx
<FacetPaletteOptions values={paletteFacet.values} />
\`\`\`

### facet
The \`facet\` prop specifies the reference to the facet object in the store.

\`\`\`jsx
<FacetPaletteOptions facet={paletteFacet} />
\`\`\`

### hideLabel
The \`hideLabel\` prop will disable the facet label.

\`\`\`jsx
<FacetPaletteOptions values={paletteFacet.values} hideLabel={true} />
\`\`\`

### columns
The \`columns\` prop is the number of columns the grid should contain. Not applicable if using \`horizontal\` prop'.

\`\`\`jsx
<FacetPaletteOptions values={paletteFacet.values} columns={3} />
\`\`\`

### gridSize
The \`gridSize\` prop is the size of each palette item. Does not apply if using \`columns\` prop.

\`\`\`jsx
<FacetPaletteOptions values={paletteFacet.values} gridSize={'45px'} columns={0} />
\`\`\`

### gapSize
The \`gapSize\` prop is the gap size between rows and columns.

\`\`\`jsx
<FacetPaletteOptions values={paletteFacet.values} gapSize={'10px'} />
\`\`\`

### hideIcon
The \`hideIcon\` prop will disable the facet icon from being rendered.

\`\`\`jsx
<FacetPaletteOptions values={paletteFacet.values} hideIcon={true} />
\`\`\`

### hideCount
The \`hideCount\` prop will disable the facet option counts from being rendered.

\`\`\`jsx
<FacetPaletteOptions values={paletteFacet.values} hideCount={true} />
\`\`\`

### hideCheckbox
The \`hideCheckbox\` prop will disable the facet option checkboxes from being rendered.

\`\`\`jsx
<FacetPaletteOptions values={paletteFacet.values} hideCheckbox={true} />
\`\`\`

### layout
The \`layout\` prop determines if the options should render as a \`list\` or \`grid\`. By default \`grid\` will be used.
\`\`\`jsx
<FacetPaletteOptions values={paletteFacet.values} hideCheckbox={true} />
\`\`\`

### horizontal
The \`horizontal\` prop render facet options horizontally.

\`\`\`jsx
<FacetPaletteOptions values={paletteFacet.values} horizontal={true} />
\`\`\`

### previewOnFocus
If using within Autocomplete, the \`previewOnFocus\` prop will invoke the \`value.preview()\` method when the value has been hovered over.

\`\`\`jsx
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

\`\`\`jsx
<FacetPaletteOptions values={paletteFacet.values} valueProps={valueProps} />
\`\`\`

### icon
The \`icon\` prop specifiesan object with \`Icon\` component props. 

### Events

#### onClick
The \`onClick\` prop allows for a custom callback function for when a facet value is clicked.

\`\`\`jsx
<FacetPaletteOptions values={paletteFacet.values} onClick={(e)=>{console.log(e)}} />
\`\`\`


#### colorMapping
The colorMapping prop allows for custom color mapping overrides. The object used is keyed by a color label, and can take background, backgroundImageUrl and label properties. 
The color label can be any accepted CSS background property value. So a color, string, hash, RGB, gradiant, or an image URL could be used. 
The label takes a string value and replaces the color's original label for display.
The backgroundImageUrl will render an actual HTML Image element rather than css background url. 

\`\`\`jsx
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
					M = {
						title: 'Molecules/FacetPaletteOptions',
						component: m.P,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(n.oz, { options: { overrides: { code: d.Z } }, children: I }), (0, t.Y)(n.uY, { story: n.h1 })],
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
					y = c.p.search({ id: 'FacetPaletteOptions', globals: { siteId: 'atkzs2' } }),
					p = (0, r.PA)(({ args: E, controller: u }) => {
						const j = u?.store?.facets.filter((U) => U.field == 'color').pop();
						return (0, t.Y)(m.P, { ...E, values: j.values });
					}),
					g = (E, { loaded: { controller: u } }) =>
						(0, t.Y)('div', { style: { maxWidth: E?.horizontal ? '1200px' : '500px' }, children: (0, t.Y)(p, { args: E, controller: u }) });
				g.loaders = [async () => (await y.search(), { controller: y })];
				const f = (E, { loaded: { controller: u } }) =>
					(0, t.Y)('div', { style: { maxWidth: E?.horizontal ? '1200px' : '500px' }, children: (0, t.Y)(p, { args: E, controller: u }) });
				(f.args = { layout: 'list', hideCount: !1, hideCheckbox: !1 }),
					(f.loaders = [async () => (await y.search(), { controller: y })]),
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
					(f.parameters = {
						...f.parameters,
						docs: {
							...f.parameters?.docs,
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
								...f.parameters?.docs?.source,
							},
						},
					});
				const C = ['Default', 'List'];
			},
			'./components/src/components/Atoms/Image/Image.tsx'(D, i, e) {
				'use strict';
				e.d(i, { _: () => E, t: () => f });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					n = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					d = e.n(m),
					o = e('./components/src/providers/cache.tsx'),
					c = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					I = e('./components/src/providers/snap.tsx'),
					M = e('./components/src/providers/treePath.tsx'),
					y = e('./components/src/utilities/mergeProps.ts'),
					p = e('./components/src/utilities/mergeStyles.ts'),
					g = e('./components/src/hooks/useComponent.tsx');
				const f = '//cdn.athoscommerce.net/snap/images/fallback.png',
					C = ({ height: u }) =>
						(0, n.AH)({
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							height: u || 'auto',
							'& img': { flexShrink: '0', objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' },
							'&.ss__image--hidden': { '& img': { visibility: 'hidden' } },
						});
				function E(u) {
					const j = (0, c.u)(),
						U = (0, I.uk)(),
						F = (0, M.LU)(),
						S = { fallback: f, lazy: !0, treePath: F },
						R = (0, y.v6)('image', j, S, u),
						{
							alt: l,
							src: _,
							fallback: h,
							title: v,
							hoverSrc: a,
							lazy: O,
							onMouseOver: A,
							onMouseOut: k,
							onError: T,
							onLoad: x,
							onClick: N,
							className: w,
							internalClassName: B,
							customComponent: Y,
						} = R;
					if (Y) {
						const b = (0, g.x)(U?.templates?.library.import.component.image || {}, Y);
						if (b) return (0, t.Y)(b, { ...R });
					}
					const [$, z] = (0, r.J0)(!1),
						[H, K] = (0, r.J0)(!1),
						W = (0, r.li)('');
					(0, r.vJ)(() => {
						W.current = _;
					}),
						W.current && W.current != _ && z(!1);
					const J = (0, p.Z)(R, C);
					return (0, t.Y)(o._, {
						children: (0, t.Y)('div', {
							...J,
							className: d()('ss__image', { 'ss__image--hidden': !$ }, w, B),
							children: (0, t.Y)('img', {
								src: (H ? a : _) || h,
								alt: l,
								title: v || l,
								loading: O ? 'lazy' : void 0,
								onLoad: (b) => {
									z(!0), x && x(b);
								},
								onClick: (b) => N && N(b),
								onError: (b) => {
									(b.target.src = h || ''), T && T(b);
								},
								onMouseOver: (b) => {
									a && K(!0), A && A(b);
								},
								onMouseOut: (b) => {
									a && K(!1), k && k(b);
								},
							}),
						}),
					});
				}
			},
			'./components/src/components/Molecules/Checkbox/Checkbox.tsx'(D, i, e) {
				'use strict';
				e.d(i, { S: () => R });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					n = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					d = e.n(m),
					o = e('../../node_modules/mobx-react-lite/es/index.js'),
					c = e('./components/src/utilities/defined.ts'),
					I = e('./components/src/utilities/mergeProps.ts'),
					M = e('./components/src/utilities/mergeStyles.ts'),
					y = e('./components/src/providers/cache.tsx'),
					p = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					g = e('./components/src/providers/snap.tsx'),
					f = e('./components/src/providers/treePath.tsx'),
					C = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					E = e('./components/src/hooks/useA11y.tsx'),
					u = e('./components/src/hooks/useLang.tsx'),
					j = e('./components/src/hooks/useComponent.tsx'),
					U = e('../../node_modules/deepmerge/dist/cjs.js'),
					F = e.n(U);
				const S = ({ size: l, color: _, theme: h, native: v }) => {
						const a = isNaN(Number(l)) ? l : `${l}px`;
						return v
							? (0, n.AH)({})
							: (0, n.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									justifyContent: 'center',
									height: a,
									width: a,
									border: `1px solid ${_ || h?.variables?.colors?.primary || '#333'}`,
									'&.ss__checkbox--disabled': { opacity: 0.7 },
									'& .ss__checkbox__empty': { display: 'inline-block', width: `calc(${l} - 30%)`, height: `calc(${l} - 30%)` },
							  });
					},
					R = (0, o.PA)((l) => {
						const _ = (0, p.u)(),
							h = (0, g.uk)(),
							a = { size: '12px', startChecked: !1, disableA11y: !1, treePath: (0, f.LU)() },
							O = (0, I.v6)('checkbox', _, a, l),
							{
								checked: A,
								color: k,
								disabled: T,
								icon: x,
								iconColor: N,
								onClick: w,
								size: B,
								startChecked: Y,
								native: $,
								disableA11y: z,
								disableStyles: H,
								className: K,
								internalClassName: W,
								theme: J,
								treePath: b,
								lang: ae,
								customComponent: V,
								style: ce,
								styleScript: ie,
								themeStyleScript: ee,
								name: re,
								...Z
							} = O;
						if (V) {
							const P = (0, j.x)(h?.templates?.library.import.component.checkbox || {}, V);
							if (P) return (0, t.Y)(P, { ...O });
						}
						const te = isNaN(Number(B)) ? B : `${B}px`,
							oe = {
								icon: {
									internalClassName: 'ss__checkbox__icon',
									icon: 'check-thin',
									...(0, c.s)({ color: N || k || J?.variables?.colors?.primary, disableStyles: H, icon: x, size: te && `calc(${te} - 30%)` }),
									theme: O.theme,
									treePath: b,
								},
							};
						let s, G;
						const se = A === void 0;
						se ? ([s, G] = (0, r.J0)(Y)) : (s = A);
						const X = (P) => {
								T || (se && G && G((le) => !le), w && w(P));
							},
							L = (0, M.Z)(O, S),
							Q = { checkbox: {} },
							q = F()(Q, ae || {}),
							ne = (0, u.u)(q, { checkedState: s, disabled: T });
						return (0, t.Y)(y._, {
							children: $
								? (0, t.Y)('input', {
										...L,
										className: d()('ss__checkbox', 'ss__checkbox--native', { 'ss__checkbox--disabled': T, 'ss__checkbox--active': s }, K, W),
										type: 'checkbox',
										'aria-checked': s,
										onClick: (P) => X(P),
										disabled: T,
										checked: s,
								  })
								: (0, t.Y)('span', {
										...L,
										className: d()('ss__checkbox', { 'ss__checkbox--disabled': T, 'ss__checkbox--active': s }, K, W),
										onClick: (P) => X(P),
										ref: (P) => (z ? null : (0, E.iy)(P)),
										'aria-disabled': T,
										role: 'checkbox',
										'aria-checked': s,
										...Z,
										...ne.checkbox.all,
										children: s
											? (0, t.Y)(C.I, { ...oe.icon, ...(typeof x == 'string' ? { icon: x } : x) })
											: (0, t.Y)('span', { className: 'ss__checkbox__empty' }),
								  }),
						});
					});
			},
			'./components/src/components/Molecules/FacetPaletteOptions/FacetPaletteOptions.tsx'(D, i, e) {
				'use strict';
				e.d(i, { P: () => v });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = e('../../node_modules/classnames/index.js'),
					m = e.n(n),
					d = e('../../node_modules/mobx-react-lite/es/index.js'),
					o = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					c = e('./components/src/utilities/defined.ts'),
					I = e('./components/src/utilities/mergeProps.ts'),
					M = e('./components/src/utilities/mergeStyles.ts'),
					y = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					p = e('./components/src/providers/cache.tsx'),
					g = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					f = e('./components/src/providers/snap.tsx'),
					C = e('./components/src/providers/treePath.tsx'),
					E = e('./components/src/toolbox/createHoverProps/createHoverProps.ts'),
					u = e('./components/src/components/Molecules/Checkbox/Checkbox.tsx'),
					j = e('./components/src/hooks/useLang.tsx'),
					U = e('./components/src/hooks/useComponent.tsx'),
					F = e('../../node_modules/deepmerge/dist/cjs.js'),
					S = e.n(F),
					R = e('../../node_modules/color/index.js'),
					l = e.n(R),
					_ = e('./components/src/components/Atoms/Image/Image.tsx');
				const h = ({ columns: a, gridSize: O, gapSize: A, horizontal: k, theme: T }) =>
						(0, r.AH)({
							display: 'flex',
							flexFlow: 'row wrap',
							gridTemplateColumns: a ? `repeat(${a}, calc((100% - (${a - 1} * ${A}))/ ${a}))` : `repeat(auto-fill, minmax(${O}, 1fr))`,
							gap: A,
							'.ss__facet-palette-options__option--list': { display: 'flex', flexDirection: 'row' },
							'.ss__facet-palette-options__option': {
								width: `calc(100% / ${a} - ${2 * Math.round((a + 2) / 2)}px )`,
								marginRight: A,
								marginBottom: A,
								[`:nth-of-type(${a}n)`]: { marginRight: '0' },
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
										borderColor: T?.variables?.colors?.primary || '#333 !important',
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
					v = (0, d.PA)((a) => {
						const O = (0, g.u)(),
							A = (0, f.uk)(),
							k = (0, C.LU)(),
							T = {
								columns: 4,
								layout: 'grid',
								gridSize: '45px',
								gapSize: a.layout == 'list' ? '2px' : '8px',
								hideCount: !0,
								hideCheckbox: !0,
								treePath: k,
							},
							x = (0, I.v6)('facetPaletteOptions', O, T, a),
							{
								values: N,
								hideLabel: w,
								layout: B,
								hideCount: Y,
								hideCheckbox: $,
								colorMapping: z,
								hideIcon: H,
								onClick: K,
								previewOnFocus: W,
								valueProps: J,
								facet: b,
								horizontal: ae,
								disableStyles: V,
								className: ce,
								internalClassName: ie,
								treePath: ee,
								customComponent: re,
							} = x;
						if (re) {
							const s = (0, U.x)(A?.templates?.library.import.component.facetPaletteOptions || {}, re);
							if (s) return (0, t.Y)(s, { ...x });
						}
						ae && (x.columns = 0);
						const Z = {
								icon: {
									internalClassName: 'ss__facet-palette-options__icon',
									...(0, c.s)({ disableStyles: V, icon: 'close-thin', color: 'white', size: '40%' }),
									theme: x?.theme,
									treePath: ee,
								},
								image: { internalClassName: 'ss__facet-palette-options__image', ...(0, c.s)({ disableStyles: V }), theme: x?.theme, treePath: ee },
								checkbox: {
									internalClassName: 'ss__facet-palette-options__checkbox',
									...(0, c.s)({ disableStyles: V }),
									theme: x?.theme,
									treePath: ee,
								},
							},
							te = (0, M.Z)(x, h),
							oe = N || b?.values;
						return oe?.length
							? (0, t.Y)(p._, {
									children: (0, t.Y)('div', {
										...te,
										className: m()('ss__facet-palette-options', `ss__facet-palette-options--${B?.toLowerCase()}`, ce, ie),
										children: oe.map((s) => {
											const G = {
													paletteOption: {
														attributes: {
															'aria-label': `${
																s.filtered
																	? `remove selected filter ${b?.label || ''} - ${s.label}`
																	: b?.label
																	? `filter by ${b?.label} - ${s.label}`
																	: `filter by ${s.label}`
															}`,
														},
													},
												},
												se = S()(G, x.lang || {}),
												X = (0, j.u)(se, { facet: b, value: s });
											let L;
											z && (L = Object.fromEntries(Object.entries(z).map(([P, le]) => [P.toLowerCase(), le])));
											const Q = L && L[s.label.toLowerCase()] && L[s.label.toLowerCase()].background ? L[s.label.toLowerCase()].background : s.value,
												q =
													L && L[s.label.toLowerCase()] && L[s.label.toLowerCase()].backgroundImageUrl
														? L[s.label.toLowerCase()].backgroundImageUrl
														: void 0;
											let ne = !1;
											if (Q)
												try {
													ne = new (l())(Q.toLowerCase()).isDark();
												} catch {}
											return (0, t.FD)(
												'a',
												{
													className: m()(
														'ss__facet-palette-options__option',
														{ 'ss__facet-palette-options__option--filtered': s.filtered },
														{ 'ss__facet-palette-options__option--dark': ne },
														`ss__facet-palette-options__option--${B?.toLowerCase()}`
													),
													href: s.url?.link?.href,
													...(w ? { title: s.label } : {}),
													...J,
													onClick: (P) => {
														s.url?.link?.onClick(P), K && K(P);
													},
													'aria-atomic': 'false',
													...(W ? (0, E.l)(() => s?.preview && s.preview()) : {}),
													...X.paletteOption?.all,
													children: [
														!$ && (0, t.Y)(u.S, { ...Z.checkbox, checked: s.filtered, disableA11y: !0, ...X.paletteOption.attributes }),
														(0, t.Y)('div', {
															className: 'ss__facet-palette-options__option__wrapper',
															children: (0, t.FD)('div', {
																className: m()(
																	'ss__facet-palette-options__option__palette',
																	`ss__facet-palette-options__option__palette--${o.p(s.value)}`,
																	{ 'ss__facet-palette-options__option__palette--image': q }
																),
																style: { background: Q },
																children: [
																	q ? (0, t.Y)(_._, { ...Z.image, src: q, alt: s.label || s.value.toString() }) : null,
																	!H && s.filtered && B?.toLowerCase() == 'grid' && (0, t.Y)(y.I, { ...Z.icon }),
																],
															}),
														}),
														!w &&
															(0, t.Y)('span', {
																className: 'ss__facet-palette-options__option__value',
																children: L?.[s.label.toLowerCase()]?.label ?? s.label,
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
			'./components/src/hooks/useA11y.tsx'(D, i, e) {
				'use strict';
				e.d(i, { DH: () => m, aZ: () => n, iy: () => d });
				const t = 9,
					r = 27,
					n = 'ss-a11y',
					m =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function d(o, c, I, M) {
					const y = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${y}`)) {
						const p = document.createElement('style');
						(p.type = 'text/css'),
							(p.id = y),
							(p.innerHTML = `[${n}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(p);
					}
					o &&
						!o.attributes?.[n] &&
						(o.setAttribute(n, !0),
						o.setAttribute('tabIndex', `${c || 0}`),
						o.addEventListener('keydown', (p) => {
							(p.code === 'Space' || p.code === 'Enter') && o.click();
						}),
						I &&
							o.addEventListener('keydown', function (p) {
								const g = o.querySelectorAll(m),
									f = g[0],
									C = g[g.length - 1];
								if (p.keyCode == r) {
									o.focus(), M && M(p), p.preventDefault(), p.stopPropagation();
									return;
								}
								(p.key === 'Tab' || p.keyCode === t) &&
									(p.shiftKey
										? document.activeElement === f && (C.focus(), p.preventDefault())
										: document.activeElement === C && (f.focus(), p.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useLang.tsx'(D, i, e) {
				'use strict';
				e.d(i, { u: () => t });
				const t = (r, n) => {
					const m = {};
					return (
						Object.keys(r).forEach((d) => {
							const o = r && r[d],
								c = {};
							o &&
								(o?.value &&
									(typeof o.value == 'function'
										? (c.value = { 'ss-lang': d, dangerouslySetInnerHTML: { __html: o.value(n) } })
										: (c.value = { 'ss-lang': d, dangerouslySetInnerHTML: { __html: o.value } })),
								o?.attributes &&
									Object.keys(o?.attributes).length &&
									((c.attributes = { 'ss-lang': d }),
									o?.attributes?.['aria-label'] &&
										(typeof o.attributes?.['aria-label'] == 'function'
											? (c.attributes['aria-label'] = o.attributes['aria-label'](n))
											: (c.attributes['aria-label'] = o.attributes['aria-label'])),
									o?.attributes?.['aria-valuetext'] &&
										(typeof o.attributes?.['aria-valuetext'] == 'function'
											? (c.attributes['aria-valuetext'] = o.attributes['aria-valuetext'](n))
											: (c.attributes['aria-valuetext'] = o.attributes['aria-valuetext'])),
									o?.attributes?.title &&
										(typeof o.attributes?.title == 'function'
											? (c.attributes.title = o.attributes.title(n))
											: (c.attributes.title = o.attributes.title)),
									o?.attributes?.alt &&
										(typeof o.attributes?.alt == 'function' ? (c.attributes.alt = o.attributes.alt(n)) : (c.attributes.alt = o.attributes.alt)),
									o?.attributes?.placeholder &&
										(typeof o.attributes?.placeholder == 'function'
											? (c.attributes.placeholder = o.attributes.placeholder(n))
											: (c.attributes.placeholder = o.attributes.placeholder))),
								(c.all = { ...c.value, ...c.attributes, 'ss-lang': d })),
								(m[d] = c);
						}),
						m
					);
				};
			},
			'./components/src/toolbox/createHoverProps/createHoverProps.ts'(D, i, e) {
				'use strict';
				e.d(i, { l: () => t });
				const t = (r, n = { delay: 333, focusElem: !0 }) => {
					let m;
					return {
						onMouseEnter: (d) => {
							clearTimeout(m),
								(m = window.setTimeout(() => {
									n.focusElem && d.target.focus(), r && r();
								}, n.delay || 333));
						},
						onMouseLeave: () => {
							clearTimeout(m);
						},
					};
				};
			},
			'./components/src/utilities/componentArgs.ts'(D, i, e) {
				'use strict';
				e.d(i, { F: () => t });
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
			'./components/src/utilities/defined.ts'(D, i, e) {
				'use strict';
				e.d(i, { s: () => t });
				function t(r) {
					const n = {};
					return (
						Object.keys(r).map((m) => {
							r[m] !== void 0 && (n[m] = r[m]);
						}),
						n
					);
				}
			},
			'./components/src/utilities/snapify.ts'(D, i, e) {
				'use strict';
				e.d(i, { p: () => U });
				var t = e('../../node_modules/mobx/dist/mobx.esm.js'),
					r = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Search/SearchController.js'),
					n = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Autocomplete/AutocompleteController.js'),
					m = e('../../node_modules/@athoscommerce/snap-controller/dist/esm/Recommendation/RecommendationController.js'),
					d = e('../../node_modules/@athoscommerce/snap-client/dist/esm/Client/Client.js'),
					o = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Autocomplete/AutocompleteStore.js'),
					c = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Search/SearchStore.js'),
					I = e('../../node_modules/@athoscommerce/snap-store-mobx/dist/esm/Recommendation/RecommendationStore.js'),
					M = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/UrlManager/UrlManager.js'),
					y = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/linkers/react/react.js'),
					p = e('../../node_modules/@athoscommerce/snap-url-manager/dist/esm/Translators/Url/UrlTranslator.js'),
					g = e('../../node_modules/@athoscommerce/snap-event-manager/dist/esm/EventManager.js'),
					f = e('../../node_modules/@athoscommerce/snap-profiler/dist/esm/Profiler.js'),
					C = e('../../node_modules/@athoscommerce/snap-logger/dist/esm/Logger.js'),
					E = e('../../node_modules/@athoscommerce/snap-tracker/dist/esm/Tracker.js');
				(0, t.jK)({ useProxies: 'always', isolateGlobalState: !0, enforceActions: 'never' });
				const u = {},
					j = { globals: { siteId: 'atkzs2' } };
				class U {
					static recommendation(_) {
						const h = _.id;
						if (u[h]) return u[h];
						const v = (u[h] = S({ client: j, controller: _ }));
						return (
							v.on('afterStore', async ({ controller: a }, O) => {
								a.log.debug('controller', a), a.log.debug('store', a.store.toJSON()), await O();
							}),
							v.init(),
							v
						);
					}
					static autocomplete(_) {
						const h = _.id;
						if (u[h]) return u[h];
						const v = (u[h] = R({ client: j, controller: _ }));
						return (
							v.on('afterStore', async ({ controller: a }, O) => {
								a.log.debug('controller', a), a.log.debug('store', a.store.toJSON()), await O();
							}),
							v.init(),
							v
						);
					}
					static search(_) {
						const h = _.id;
						if (u[h]) return u[h];
						const v = (u[h] = F({ client: j, controller: _ }));
						return (
							v.on('afterStore', async ({ controller: a }, O) => {
								a.log.debug('controller', a), a.log.debug('store', a.store.toJSON()), await O();
							}),
							v.init(),
							v
						);
					}
				}
				function F(l) {
					const _ = new M.V(new p.E({ settings: { coreType: 'query', corePrefix: l.controller.id } }), y.X);
					return new r.Tp(l.controller, {
						client: new d.K(l.client.globals, l.client.config),
						store: new c.U(l.controller, { urlManager: _ }),
						urlManager: _,
						eventManager: new g.E(),
						profiler: new f.U(),
						logger: new C.V(),
						tracker: new E.J(l.client.globals),
					});
				}
				function S(l) {
					const _ = new M.V(new p.E(), y.X).detach(!0);
					return new m.c(l.controller, {
						client: new d.K(l.client.globals, l.client.config),
						store: new I.t(l.controller, { urlManager: _ }),
						urlManager: _,
						eventManager: new g.E(),
						profiler: new f.U(),
						logger: new C.V(),
						tracker: new E.J(l.client.globals),
					});
				}
				function R(l) {
					const _ = new M.V(new p.E(), y.X).detach();
					return new n.Z(l.controller, {
						client: new d.K(l.client.globals, l.client.config),
						store: new o.Y(l.controller, { urlManager: _ }),
						urlManager: _,
						eventManager: new g.E(),
						profiler: new f.U(),
						logger: new C.V(),
						tracker: new E.J(l.client.globals),
					});
				}
			},
			'./components/src/utilities/storybook.tsx'(D, i, e) {
				'use strict';
				e.d(i, { Z: () => m });
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					r = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const n = 'prism-block',
					m = (d) => {
						const o = (0, r.li)(null);
						return (
							(0, r.vJ)(() => {
								o.current && d.className?.includes('lang-') && !d.className?.includes(n) && window?.Prism?.highlightElement(o.current);
							}, [d.className, d.children, o]),
							(0, t.Y)('code', { ...d, ref: o, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(D) {
				function i(e) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(i.keys = () => []), (i.resolve = i), (i.id = '../../node_modules/memoizerific sync recursive'), (D.exports = i);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-FacetPaletteOptions-FacetPaletteOptions-stories.710d7788.iframe.bundle.js.map
