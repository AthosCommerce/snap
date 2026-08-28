(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[4081],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(h, l, e) {
				'use strict';
				e.d(l, { p: () => t });
				function t(n) {
					if (typeof n != 'string') return n;
					let a = n.toLowerCase();
					return (a = a.replace(/[^\w\s]/g, '').trim()), (a = a.replace(/\s/g, '-')), a;
				}
			},
			'./components/src/components/Molecules/Grid/Grid.stories.tsx'(h, l, e) {
				'use strict';
				e.r(l),
					e.d(l, {
						Default: () => o,
						DisabledOption: () => s,
						Images: () => f,
						__namedExportsOrder: () => _,
						backgroundColors: () => r,
						default: () => b,
						overflow: () => g,
					});
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					a = e('./components/src/components/Molecules/Grid/Grid.tsx'),
					d = e('./components/src/utilities/storybook.tsx'),
					u = e('./components/src/utilities/componentArgs.ts');
				const c = `# Grid

Renders an Grid of options

## Components Used
- image

## Usage
\`\`\`tsx
import { Grid } from '@athoscommerce/snap-preact/components';
\`\`\`

### options
The required \`options\` prop specifies an array of options to render.

\`\`\`tsx
const options: SwatchOption = [
		{
			value: 'one',
			disabled: true,
		},
		{
			value: 'two',
		},
		{
			value: 'three',
		},
	],

<Grid options={options} />
\`\`\`

### gapSize
The optional \`gapsize\` props specifies the gap size between rows and columns.

\`\`\`tsx
<Grid options={options} gapsize={'15px'} />
\`\`\`

### columns
The optional \`columns\` prop specifies the number of columns to show in the grid. (defaults to 4)

\`\`\`tsx
<Grid options={options} columns={3} />
\`\`\`

### rows
The optional \`rows\` prop specifies the number of rows to show in the grid. Should be noted that if more \`options\` are passed than are allowed via \`columns\` and \`rows\` props, then the component will hide the overflow options behind a \`+ 4 more\` overflow button. 

\`\`\`tsx
<Grid options={options} rows={2} />
\`\`\`

### disableOverflowAction
The optional \`disableOverflowAction\` prop will disable the overflow action from the overflow button (\`+ 4 more\`s). This is to be used when you want the overflow button to show render but you do not want the grid to expand and show all options onclick of the overflow button. 

\`\`\`tsx
<Grid options={options} rows={2} disableOverflowAction={true}/>
\`\`\`

### overflowButton
The optional \`overflowButton\` prop accepts a custom JSX element to render instead of the default overflow button. The custom component will be passed the current expanded state of the grid, as well as the number of options hidden 

\`\`\`tsx

const overflowButton = (expanded, remainder) => {
    return (
       expanded ? (
            <span>
                show {remainder} more
            </span>
        ) : (
            <span>
                Show Less
            </span>
        )
    )
}

<Grid options={options} rows={2} overflowButton={overflowButton}/>
\`\`\`

### overflowButtonInGrid
The optional \`overflowButtonInGrid\` prop specifies if the overflow button should be rendered in the grid or below. 

\`\`\`tsx
<Grid options={options} overflowButtonInGrid={true} />
\`\`\`

### onOverflowButtonClick
The optional \`onOverflowButtonClick\` prop specifies to custom function to call onClick of the overflow button. 

\`\`\`tsx
const onOverflowButtonClick = (expandedState: boolean, remainder: number) => {
    console.log(expandedState, remainder);
}

<Grid options={options} onOverflowButtonClick={onOverflowButtonClick} />
\`\`\`

### hideLabels
The optional \`hideLabels\` prop specifies if option labels should be hidden. 

\`\`\`tsx
<Grid options={options} hideLabels={true} />
\`\`\`

### hideShowLess
The optional \`hideShowLess\` prop specifies if show less button should be hidden. 

\`\`\`tsx
<Grid options={options} hideShowLess={true} />
\`\`\`

### multiselect
The optional \`multiselect\` prop specifies if more than a single option can be selected at once. 

\`\`\`tsx
<Grid options={options} multiselect={true} />
\`\`\`

### onSelect
The optional \`onSelect\` prop specifies callback function to be called on option click. 

\`\`\`tsx
const onSelectFunc = (event, clickedOption, currenctlySelectedOptionArray) => {
    console.log(event, clickedOption, currenctlySelectedOptionArray)
}

<Grid options={options} onSelect={onSelectFunc} />
\`\`\`

### titleText
The optional \`titleText\` prop specifies the text to be rendered in the grid title. 

\`\`\`tsx
<Grid options={options} titleText={"Grid Title"} />
\`\`\`

### selected
The optional \`selected\` prop specifies the selected option(s) if the selected state is handled outside of the component. 

\`\`\`tsx

const selectedOption: SwatchOption = [
    {
        value: 'two',
    },
]

<Grid options={options} selected={selectedOption} />
\`\`\`



## Lang

The \`lang\` prop allows you to override translatable text strings used by the Grid component. All lang entries support a \`value\` (static string or function) and \`attributes\` (e.g. \`aria-label\`).

| Lang Key | Description | Data Provided |
|---|---|---|
| \`showMoreText\` | Show more button text | \`limited\` (boolean), \`remainder\` (number), \`overflowButtonInGrid\` (boolean) |
| \`showLessText\` | Show less button text | \`limited\` (boolean), \`remainder\` (number), \`overflowButtonInGrid\` (boolean) |

### Example

\`\`\`tsx
<Grid
	options={options}
	lang={{
		showMoreText: {
			value: (data) => data.overflowButtonInGrid ? \`+ \${data.remainder}\` : 'Show More',
		},
		showLessText: {
			value: (data) => data.overflowButtonInGrid ? \`- \${data.remainder}\` : 'Show Less',
		},
	}}
/>
\`\`\`
`,
					b = {
						title: 'Molecules/Grid',
						component: a.x,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, t.FD)('div', {
										children: [(0, t.Y)(n.oz, { options: { overrides: { code: d.Z } }, children: c }), (0, t.Y)(n.uY, { story: n.h1 })],
									}),
							},
						},
						decorators: [(m) => (0, t.Y)('div', { style: { maxWidth: '500px' }, children: (0, t.Y)(m, {}) })],
						argTypes: {
							options: {
								description: 'list of options to display',
								type: { required: !1 },
								table: { category: 'Templates Legal', type: { summary: 'option[]' } },
								control: { type: 'object' },
							},
							titleText: {
								defaultValue: '',
								description: 'optional title to render',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '' } },
								control: { type: 'text' },
							},
							multiSelect: {
								description: 'enable/disable multiselect',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							onSelect: {
								description: 'option onSelect event handler',
								table: { category: 'Templates Legal', type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onSelect',
							},
							selected: {
								description: 'Current selected option',
								table: { category: 'Templates Legal', type: { summary: 'string | number' } },
								control: { type: 'none' },
							},
							hideLabels: {
								description: 'enable/disable option labels from rendering',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							hideShowLess: {
								description: 'hide show less button',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							columns: {
								defaultValue: 4,
								description: 'Number of columns in grid',
								table: { category: 'Templates Legal', type: { summary: 'number' }, defaultValue: { summary: 4 } },
								control: { type: 'number' },
							},
							rows: {
								description: 'Number of rows in grid',
								table: { category: 'Templates Legal', type: { summary: 'number' } },
								control: { type: 'number' },
							},
							gapSize: {
								defaultValue: '8px',
								description: 'Gap size between rows and columns',
								table: { category: 'Templates Legal', type: { summary: 'string' }, defaultValue: { summary: '8px' } },
								control: { type: 'text' },
							},
							disableOverflowAction: {
								description: 'enable/disable show more click functionality',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
								control: { type: 'boolean' },
							},
							overflowButtonInGrid: {
								description: 'render overflow button in the grid or below',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
								control: { type: 'boolean' },
							},
							overflowButton: {
								description: 'Slot for custom overflow button component.',
								table: { category: 'Templates Legal', type: { summary: 'component' } },
							},
							onOverflowButtonClick: {
								description: 'Custom onClick event handler for overflow button',
								table: { category: 'Templates Legal', type: { summary: 'function' } },
								action: 'onOverflowButtonClick',
							},
							...u.F,
						},
					},
					o = (m) => (0, t.Y)(a.x, { ...m });
				o.args = {
					options: [
						{ value: 'one' },
						{ value: 'two' },
						{ value: 'three' },
						{ value: 'four' },
						{ value: 'five' },
						{ value: 'six' },
						{ value: 'seven' },
						{ value: 'eight' },
					],
				};
				const s = (m) => (0, t.Y)(a.x, { ...m });
				s.args = {
					options: [
						{ value: 'one', disabled: !0 },
						{ value: 'two' },
						{ value: 'three' },
						{ value: 'four' },
						{ value: 'five' },
						{ value: 'six' },
						{ value: 'seven' },
						{ value: 'eight' },
					],
				};
				const f = (m) => (0, t.Y)(a.x, { ...m });
				f.args = {
					options: [
						{
							value: 'Faded Khaki',
							backgroundImageUrl:
								'https://cdn.shopify.com/s/files/1/0677/2424/7298/files/25caa3be92e5680ba340a62dc99cac3f_1b83cffd-c611-42bf-b6d8-59a497fe2ec7.jpg?v=1706125264',
						},
						{
							value: 'Indigo',
							backgroundImageUrl:
								'https://cdn.shopify.com/s/files/1/0677/2424/7298/files/4dae673375338093f817804c8da6305a_7de3d458-28f4-41d1-903a-b8916ef26dcb.jpg?v=1706125265https://cdn.shopify.com/s/files/1/0677/2424/7298/files/11136413-I_OK_x_Arvin_Gds_Wool_Boot_Socks_CBM_1_0e3b5702-49e2-4608-acb6-7c131891fc18_450x.jpg?v=1706124808',
						},
						{
							value: 'Mirage',
							backgroundImageUrl:
								'https://cdn.shopify.com/s/files/1/0677/2424/7298/files/a853b69a38627e53209e0cb98c90d154_63b6fc1d-2fe5-4c54-bb86-09bd4f7b550b.jpg?v=1706125265',
						},
						{
							value: 'Toasted',
							backgroundImageUrl:
								'https://cdn.shopify.com/s/files/1/0677/2424/7298/files/77f9701fc6979aadbedec33a68398aaa_cecd6b05-9aea-4db1-b4f1-ac245da74abb.jpg?v=1706125264',
						},
					],
					overflowButtonInGrid: !0,
					hideLabels: !0,
					rows: 1,
					columns: 4,
				};
				const r = (m) => (0, t.Y)(a.x, { ...m });
				r.args = {
					options: [
						{ value: 'red', background: 'red' },
						{ value: 'blue', background: 'blue' },
						{ value: 'white', background: 'white', disabled: !0 },
						{ value: 'black', background: 'black' },
						{ value: 'green', background: 'green' },
						{ value: 'yellow', background: 'yellow' },
					],
					hideLabels: !0,
					columns: 5,
					overflowButtonInGrid: !0,
					rows: 1,
				};
				const g = (m) => (0, t.Y)(a.x, { ...m });
				(g.args = {
					options: [
						{ value: 'one' },
						{ value: 'two' },
						{ value: 'three' },
						{ value: 'four' },
						{ value: 'five' },
						{ value: 'six' },
						{ value: 'seven' },
						{ value: 'eight' },
					],
					rows: 2,
					columns: 3,
				}),
					(o.parameters = {
						...o.parameters,
						docs: { ...o.parameters?.docs, source: { originalSource: '(args: GridProps) => <Grid {...args} />', ...o.parameters?.docs?.source } },
					}),
					(s.parameters = {
						...s.parameters,
						docs: { ...s.parameters?.docs, source: { originalSource: '(args: GridProps) => <Grid {...args} />', ...s.parameters?.docs?.source } },
					}),
					(f.parameters = {
						...f.parameters,
						docs: { ...f.parameters?.docs, source: { originalSource: '(args: GridProps) => <Grid {...args} />', ...f.parameters?.docs?.source } },
					}),
					(r.parameters = {
						...r.parameters,
						docs: { ...r.parameters?.docs, source: { originalSource: '(args: GridProps) => <Grid {...args} />', ...r.parameters?.docs?.source } },
					}),
					(g.parameters = {
						...g.parameters,
						docs: { ...g.parameters?.docs, source: { originalSource: '(args: GridProps) => <Grid {...args} />', ...g.parameters?.docs?.source } },
					});
				const _ = ['Default', 'DisabledOption', 'Images', 'backgroundColors', 'overflow'];
			},
			'./components/src/components/Atoms/Image/Image.tsx'(h, l, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					a = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					d = e('../../node_modules/classnames/index.js'),
					u = e.n(d),
					c = e('../../node_modules/mobx-react-lite/es/index.js'),
					b = e('./components/src/providers/cache.tsx'),
					o = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					s = e('./components/src/providers/treePath.tsx'),
					f = e('./components/src/utilities/mergeProps.ts'),
					r = e('./components/src/utilities/mergeStyles.ts'),
					g = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const _ = '//cdn.athoscommerce.net/snap/images/fallback.png',
					m = ({ height: O }) =>
						(0, a.AH)({
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							height: O || 'auto',
							'& img': { flexShrink: '0', objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' },
							'&.ss__image--hidden': { '& img': { visibility: 'hidden' } },
						}),
					B = (0, c.PA)((O) => {
						const I = (0, o.u)(),
							te = (0, s.LU)(),
							oe = { fallback: _, lazy: !0, treePath: te },
							G = (0, f.v6)('image', I, oe, O),
							{
								alt: K,
								src: S,
								fallback: F,
								title: se,
								hoverSrc: W,
								lazy: C,
								onMouseOver: v,
								onMouseOut: j,
								onError: U,
								onLoad: P,
								onClick: Y,
								onPointerDown: A,
								onPointerMove: V,
								onPointerUp: N,
								onPointerLeave: H,
								className: J,
								internalClassName: Z,
								draggable: X,
							} = G,
							{ overrideElement: ne, shouldRenderDefault: M } = (0, g._)('image', G);
						if (!M) return ne;
						const [Q, x] = (0, n.J0)(!1),
							[ae, $] = (0, n.J0)(!1),
							z = (0, n.li)('');
						(0, n.vJ)(() => {
							z.current = S;
						}),
							z.current && z.current != S && x(!1);
						const re = (0, r.Z)(G, m);
						return (0, t.Y)(b._, {
							children: (0, t.Y)('div', {
								...re,
								className: u()('ss__image', { 'ss__image--hidden': !Q }, J, Z),
								children: (0, t.Y)('img', {
									src: (ae ? W : S) || F,
									alt: K,
									title: se || K,
									loading: C ? 'lazy' : void 0,
									onLoad: (p) => {
										x(!0), P && P(p);
									},
									onClick: (p) => Y && Y(p),
									onError: (p) => {
										(p.target.src = F || ''), U && U(p);
									},
									onMouseOver: (p) => {
										W && $(!0), v && v(p);
									},
									onMouseOut: (p) => {
										W && $(!1), j && j(p);
									},
									onPointerDown: (p) => {
										A && A(p);
									},
									onPointerMove: (p) => {
										V && V(p);
									},
									onPointerUp: (p) => {
										N && N(p);
									},
									onPointerLeave: (p) => {
										H && H(p);
									},
									draggable: X,
								}),
							}),
						});
					});
				e.d(l, ['_', 0, B, 't', 0, _]);
			},
			'./components/src/components/Molecules/Grid/Grid.tsx'(h, l, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					d = e('../../node_modules/classnames/index.js'),
					u = e.n(d),
					c = e('../../node_modules/deepmerge/dist/cjs.js'),
					b = e.n(c),
					o = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					s = e('../../node_modules/mobx-react-lite/es/index.js'),
					f = e('./components/src/providers/cache.tsx'),
					r = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					g = e('./components/src/providers/treePath.tsx'),
					_ = e('./components/src/hooks/useA11y.tsx'),
					m = e('./components/src/hooks/useLang.tsx'),
					B = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					O = e('./components/src/components/Atoms/Image/Image.tsx'),
					I = e('./components/src/utilities/cloneWithProps.tsx'),
					te = e('./components/src/utilities/defined.ts'),
					oe = e('./components/src/utilities/mergeProps.ts'),
					G = e('./components/src/utilities/mergeStyles.ts'),
					K = e('./components/src/utilities/selectionKey.ts'),
					S = e('../../node_modules/colord/index.mjs'),
					F = e('../../node_modules/colord/plugins/names.mjs');
				(0, S.X$)([F.A]);
				const se = ({ gapSize: C, columns: v, theme: j, disableOverflowAction: U }) =>
						(0, n.AH)({
							'.ss__grid__options': {
								display: 'flex',
								flexFlow: 'row wrap',
								gridTemplateColumns: `repeat(${v}, 1fr)`,
								gap: C,
								gridAutoRows: '1fr',
								'.ss__grid__option': {
									display: 'flex',
									flexDirection: 'column',
									boxSizing: 'content-box',
									backgroundRepeat: 'no-repeat',
									backgroundSize: `calc(100% / ${v} - ${2 * Math.round((v + 2) / 2)}px)`,
									backgroundPosition: 'center !important',
									justifyContent: 'center',
									alignItems: 'center',
									flex: '0 1 auto',
									border: `1px solid ${j?.variables?.colors?.primary || '#333'}`,
									textAlign: 'center',
									wordBreak: 'break-all',
									padding: '1em 0',
									width: `calc(100% / ${v} - ${2 * Math.round((v + 2) / 2)}px)`,
									margin: `0 ${C} ${C} 0`,
									'.ss__grid__option__inner': {
										aspectRatio: '1/1',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										margin: 'auto',
										height: '100%',
										'.ss__image': { aspectRatio: '1/1' },
									},
									'.ss__grid__option__label': { cursor: 'pointer' },
									[`:nth-of-type(${v}n)`]: { marginRight: '0' },
									'&.ss__grid__option--selected': { border: `2px solid ${j?.variables?.colors?.primary || '#333'}` },
									'&.ss__grid__option--disabled': { position: 'relative', opacity: '.5', cursor: 'none', pointerEvents: 'none' },
									'&.ss__grid__option--unavailable': { position: 'relative', opacity: '.5' },
									'&.ss__grid__option--disabled:before, &.ss__grid__option--unavailable:before': {
										content: '""',
										display: 'block',
										position: 'absolute',
										top: '50%',
										width: '90%',
										height: '1px',
										borderTop: '3px solid #eee',
										outline: '1px solid #ffff',
										transform: 'rotate(-45deg)',
									},
									'&.ss__grid__option--dark': { color: '#fff' },
									'&:hover:not(.ss__grid__option--selected)': { cursor: 'pointer' },
								},
								'@supports (display: grid)': {
									display: 'grid',
									'.ss__grid__option': { padding: '0', margin: '0', width: 'initial' },
									'&::before': { content: '""', width: 0, paddingBottom: '100%', gridRow: '1 / 1', gridColumn: '1 / 1' },
									'&> *:first-of-type': { gridRow: '1 / 1', gridColumn: '1 / 1' },
								},
							},
							'.ss__grid__show-more-wrapper': {
								'&:not(.ss__grid__option)': { margin: '8px' },
								'&:hover': { cursor: U ? 'initial !important' : 'pointer !important' },
							},
						}),
					W = (0, s.PA)((C) => {
						const v = (0, r.u)(),
							U = { multiSelect: !1, columns: 4, gapSize: '8px', treePath: (0, g.LU)() },
							P = (0, oe.v6)('grid', v, U, C),
							{
								titleText: Y,
								onSelect: A,
								hideLabels: V,
								disableOverflowAction: N,
								multiSelect: H,
								overflowButton: J,
								columns: Z,
								rows: X,
								hideShowLess: ne,
								overflowButtonInGrid: M,
								disabled: Q,
								options: x,
								disableStyles: ae,
								onOverflowButtonClick: $,
								className: z,
								internalClassName: re,
								treePath: p,
								disableA11y: de,
							} = P,
							{ overrideElement: ce, shouldRenderDefault: ue } = (0, B._)('grid', P);
						if (!ue) return ce;
						const fe = { image: { internalClassName: 'ss__grid__image', ...(0, te.s)({ disableStyles: ae }), theme: P?.theme, treePath: p } };
						let T = P.selected;
						const me = (0, G.Z)(P, se);
						T && !Array.isArray(T) && (T = [T]);
						const [q, ie] = (0, a.J0)(T || []),
							[pe, be] = (0, a.J0)(() => (0, K.i)(T));
						if (T) {
							const i = (0, K.i)(T);
							i !== pe && (be(i), ie(T));
						}
						const ge = (i, y) => {
								if (H) {
									let w;
									q.find((E) => E.value === y.value)
										? ((w = [...q]),
										  w.splice(
												w.findIndex((E) => E.value === y.value),
												1
										  ))
										: (w = [...q, y]),
										A && A(i, y, w),
										ie(w);
								} else A && A(i, y, [y]), ie([y]);
							},
							ee = X && Z ? Z * X : x.length,
							L = Math.max(0, x.length - (ee - (M ? 1 : 0))),
							[k, _e] = (0, a.J0)(!!L),
							le = () => {
								const i = ne ? k : !0,
									y = { showMoreText: { value: M ? `+ ${L}` : 'Show More' }, showLessText: { value: M ? `- ${L}` : 'Show Less' } },
									w = b()(y, P.lang || {}),
									E = (0, m.u)(w, { limited: k, remainder: L }, { activeBreakpoint: v?.activeBreakpoint });
								return i && L > 0 && x.length !== ee
									? (0, t.Y)('div', {
											className: `ss__grid__show-more-wrapper ${M ? 'ss__grid__option' : ''}`,
											onClick: (R) => {
												!N && _e(!k), $ && $(R, !!k, L);
											},
											role: 'button',
											ref: (R) => (!de && !N ? (0, _.iy)(R) : null),
											...(k ? E.showMoreText.attributes : E.showLessText.attributes),
											children: J
												? (0, I.Y)(J, { limited: k, remainder: L, treePath: p })
												: k
												? (0, t.Y)('span', { className: 'ss__grid__show-more', ...E.showMoreText.value })
												: L
												? (0, t.Y)('span', { className: 'ss__grid__show-less', ...E.showLessText.value })
												: null,
									  })
									: null;
							};
						return typeof x == 'object' && x?.length
							? (0, t.Y)(f._, {
									children: (0, t.FD)('div', {
										...me,
										className: u()('ss__grid', Q ? 'ss__grid--disabled' : '', z, re),
										children: [
											Y && (0, t.Y)('h5', { className: 'ss__grid__title', children: Y }),
											(0, t.FD)('div', {
												className: 'ss__grid__options',
												children: [
													x.map((i, y) => {
														const w = q.some((D) => D.value == i.value);
														let E = !1;
														const R = i.background?.toLowerCase() || (i.backgroundImageUrl ? null : i.value.toString().toLowerCase());
														if (R)
															try {
																const D = (0, S.Mj)(R);
																D.isValid() && (E = D.isDark());
															} catch {}
														if (!k || x.length == ee || y < ee - (M ? 1 : 0))
															return (0, t.Y)('div', {
																className: u()('ss__grid__option', {
																	'ss__grid__option--selected': w,
																	'ss__grid__option--disabled': i?.disabled,
																	'ss__grid__option--unavailable': i?.available === !1,
																	'ss__grid__option--dark': E,
																}),
																onClick: (D) => !Q && !i?.disabled && ge(D, i),
																ref: (D) => (0, _.iy)(D),
																title: i.label || i.value.toString(),
																role: 'option',
																'aria-selected': w,
																'aria-disabled': i.disabled,
																children: (0, t.FD)('div', {
																	className: u()('ss__grid__option__inner', `ss__grid__option__inner--${o.p(i.value.toString())}`),
																	style: { background: i.background ? i.background : i.backgroundImageUrl ? void 0 : i.value },
																	children: [
																		!i.background && i.backgroundImageUrl
																			? (0, t.Y)(O._, { ...fe.image, src: i.backgroundImageUrl, alt: i.label || i.value.toString() })
																			: null,
																		V ? null : (0, t.Y)('label', { className: 'ss__grid__option__label', children: i.label || i.value }),
																	],
																}),
															});
													}),
													M ? (0, t.Y)(le, {}) : null,
												],
											}),
											M ? null : (0, t.Y)(le, {}),
										],
									}),
							  })
							: null;
					});
				e.d(l, ['x', 0, W]);
			},
			'./components/src/hooks/useA11y.tsx'(h, l, e) {
				'use strict';
				e.d(l, { iy: () => u });
				const t = 9,
					n = 27,
					a = 'ss-a11y',
					d =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function u(c, b, o, s) {
					const f = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${f}`)) {
						const r = document.createElement('style');
						(r.type = 'text/css'),
							(r.id = f),
							(r.innerHTML = `[${a}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(r);
					}
					c &&
						!c.attributes?.[a] &&
						(c.setAttribute(a, !0),
						c.setAttribute('tabIndex', `${b || 0}`),
						c.addEventListener('keydown', (r) => {
							(r.code === 'Space' || r.code === 'Enter') && r.target === c && c.click();
						}),
						o &&
							c.addEventListener('keydown', function (r) {
								const g = c.querySelectorAll(d),
									_ = g[0],
									m = g[g.length - 1];
								if (r.keyCode == n) {
									c.focus(), s && s(r), r.preventDefault(), r.stopPropagation();
									return;
								}
								(r.key === 'Tab' || r.keyCode === t) &&
									(r.shiftKey
										? document.activeElement === _ && (m.focus(), r.preventDefault())
										: document.activeElement === m && (_.focus(), r.preventDefault()));
							}));
				}
				e.d(l, ['DH', 0, d, 'aZ', 0, a]);
			},
			'./components/src/hooks/useLang.tsx'(h, l, e) {
				'use strict';
				const t = (n, a, d) => {
					const u = d ? { ...a, ...d } : a,
						c = {};
					return (
						Object.keys(n).forEach((b) => {
							const o = n && n[b],
								s = {};
							o &&
								(o?.value &&
									(typeof o.value == 'function'
										? (s.value = { 'ss-lang': b, dangerouslySetInnerHTML: { __html: o.value(u) } })
										: (s.value = { 'ss-lang': b, dangerouslySetInnerHTML: { __html: o.value } })),
								o?.attributes &&
									Object.keys(o?.attributes).length &&
									((s.attributes = { 'ss-lang': b }),
									o?.attributes?.['aria-label'] &&
										(typeof o.attributes?.['aria-label'] == 'function'
											? (s.attributes['aria-label'] = o.attributes['aria-label'](u))
											: (s.attributes['aria-label'] = o.attributes['aria-label'])),
									o?.attributes?.['aria-valuetext'] &&
										(typeof o.attributes?.['aria-valuetext'] == 'function'
											? (s.attributes['aria-valuetext'] = o.attributes['aria-valuetext'](u))
											: (s.attributes['aria-valuetext'] = o.attributes['aria-valuetext'])),
									o?.attributes?.title &&
										(typeof o.attributes?.title == 'function'
											? (s.attributes.title = o.attributes.title(u))
											: (s.attributes.title = o.attributes.title)),
									o?.attributes?.alt &&
										(typeof o.attributes?.alt == 'function' ? (s.attributes.alt = o.attributes.alt(u)) : (s.attributes.alt = o.attributes.alt)),
									o?.attributes?.placeholder &&
										(typeof o.attributes?.placeholder == 'function'
											? (s.attributes.placeholder = o.attributes.placeholder(u))
											: (s.attributes.placeholder = o.attributes.placeholder))),
								(s.all = { ...s.value, ...s.attributes, 'ss-lang': b })),
								(c[b] = s);
						}),
						c
					);
				};
				e.d(l, ['u', 0, t]);
			},
			'./components/src/utilities/componentArgs.ts'(h, l, e) {
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
			'./components/src/utilities/defined.ts'(h, l, e) {
				'use strict';
				e.d(l, { s: () => t });
				function t(n) {
					const a = {};
					return (
						Object.keys(n).map((d) => {
							n[d] !== void 0 && (a[d] = n[d]);
						}),
						a
					);
				}
			},
			'./components/src/utilities/selectionKey.ts'(h, l, e) {
				'use strict';
				e.d(l, { i: () => t });
				function t(n) {
					return (n == null ? [] : Array.isArray(n) ? n : [n]).map((d) => `${d?.value}:${d?.label}`).join('|');
				}
			},
			'./components/src/utilities/storybook.tsx'(h, l, e) {
				'use strict';
				var t = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const a = 'prism-block',
					d = (u) => {
						const c = (0, n.li)(null);
						return (
							(0, n.vJ)(() => {
								c.current && u.className?.includes('lang-') && !u.className?.includes(a) && window?.Prism?.highlightElement(c.current);
							}, [u.className, u.children, c]),
							(0, t.Y)('code', { ...u, ref: c, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(l, ['Z', 0, d]);
			},
			'../../node_modules/colord/plugins/names.mjs'(h, l, e) {
				'use strict';
				e.d(l, { A: () => t }), e.dn(t);
				function t(n, a) {
					var d = {
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
						u = {};
					for (var c in d) u[d[c]] = c;
					var b = {};
					(n.prototype.toName = function (o) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var s,
							f,
							r = u[this.toHex()];
						if (r) return r;
						if (o?.closest) {
							var g = this.toRgb(),
								_ = 1 / 0,
								m = 'black';
							if (!b.length) for (var B in d) b[B] = new n(d[B]).toRgb();
							for (var O in d) {
								var I = ((s = g), (f = b[O]), Math.pow(s.r - f.r, 2) + Math.pow(s.g - f.g, 2) + Math.pow(s.b - f.b, 2));
								I < _ && ((_ = I), (m = O));
							}
							return m;
						}
					}),
						a.string.push([
							function (o) {
								var s = o.toLowerCase(),
									f = s === 'transparent' ? '#0000' : d[s];
								return f ? new n(f).toRgb() : null;
							},
							'name',
						]);
				}
			},
			'../../node_modules/memoizerific sync recursive'(h) {
				function l(e) {
					const t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				}
				(l.keys = () => []), (l.resolve = l), (l.id = '../../node_modules/memoizerific sync recursive'), (h.exports = l);
			},
		},
	]);
})();
