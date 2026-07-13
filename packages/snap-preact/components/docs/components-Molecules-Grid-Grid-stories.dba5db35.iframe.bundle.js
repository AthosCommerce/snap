(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[4081],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(y, l, e) {
				'use strict';
				e.d(l, { p: () => o });
				function o(n) {
					if (typeof n != 'string') return n;
					let s = n.toLowerCase();
					return (s = s.replace(/[^\w\s]/g, '').trim()), (s = s.replace(/\s/g, '-')), s;
				}
			},
			'./components/src/components/Molecules/Grid/Grid.stories.tsx'(y, l, e) {
				'use strict';
				e.r(l),
					e.d(l, {
						Default: () => p,
						DisabledOption: () => u,
						Images: () => f,
						__namedExportsOrder: () => _,
						backgroundColors: () => a,
						default: () => i,
						overflow: () => b,
					});
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					s = e('./components/src/components/Molecules/Grid/Grid.tsx'),
					c = e('./components/src/utilities/storybook.tsx'),
					d = e('./components/src/utilities/componentArgs.ts');
				const t = `# Grid

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


`,
					i = {
						title: 'Molecules/Grid',
						component: s.x,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, o.FD)('div', {
										children: [(0, o.Y)(n.oz, { options: { overrides: { code: c.Z } }, children: t }), (0, o.Y)(n.uY, { story: n.h1 })],
									}),
							},
						},
						decorators: [(m) => (0, o.Y)('div', { style: { maxWidth: '500px' }, children: (0, o.Y)(m, {}) })],
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
							...d.F,
						},
					},
					p = (m) => (0, o.Y)(s.x, { ...m });
				p.args = {
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
				const u = (m) => (0, o.Y)(s.x, { ...m });
				u.args = {
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
				const f = (m) => (0, o.Y)(s.x, { ...m });
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
				const a = (m) => (0, o.Y)(s.x, { ...m });
				a.args = {
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
				const b = (m) => (0, o.Y)(s.x, { ...m });
				(b.args = {
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
					(p.parameters = {
						...p.parameters,
						docs: { ...p.parameters?.docs, source: { originalSource: '(args: GridProps) => <Grid {...args} />', ...p.parameters?.docs?.source } },
					}),
					(u.parameters = {
						...u.parameters,
						docs: { ...u.parameters?.docs, source: { originalSource: '(args: GridProps) => <Grid {...args} />', ...u.parameters?.docs?.source } },
					}),
					(f.parameters = {
						...f.parameters,
						docs: { ...f.parameters?.docs, source: { originalSource: '(args: GridProps) => <Grid {...args} />', ...f.parameters?.docs?.source } },
					}),
					(a.parameters = {
						...a.parameters,
						docs: { ...a.parameters?.docs, source: { originalSource: '(args: GridProps) => <Grid {...args} />', ...a.parameters?.docs?.source } },
					}),
					(b.parameters = {
						...b.parameters,
						docs: { ...b.parameters?.docs, source: { originalSource: '(args: GridProps) => <Grid {...args} />', ...b.parameters?.docs?.source } },
					});
				const _ = ['Default', 'DisabledOption', 'Images', 'backgroundColors', 'overflow'];
			},
			'./components/src/components/Atoms/Image/Image.tsx'(y, l, e) {
				'use strict';
				e.d(l, { _: () => I, t: () => _ });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					s = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					c = e('../../node_modules/classnames/index.js'),
					d = e.n(c),
					t = e('../../node_modules/mobx-react-lite/es/index.js'),
					i = e('./components/src/providers/cache.tsx'),
					p = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					u = e('./components/src/providers/treePath.tsx'),
					f = e('./components/src/utilities/mergeProps.ts'),
					a = e('./components/src/utilities/mergeStyles.ts'),
					b = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const _ = '//cdn.athoscommerce.net/snap/images/fallback.png',
					m = ({ height: O }) =>
						(0, s.AH)({
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							height: O || 'auto',
							'& img': { flexShrink: '0', objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' },
							'&.ss__image--hidden': { '& img': { visibility: 'hidden' } },
						}),
					I = (0, t.PA)((O) => {
						const B = (0, p.u)(),
							Z = (0, u.LU)(),
							X = { fallback: _, lazy: !0, treePath: Z },
							G = (0, f.v6)('image', B, X, O),
							{
								alt: K,
								src: W,
								fallback: z,
								title: Q,
								hoverSrc: P,
								lazy: w,
								onMouseOver: S,
								onMouseOut: j,
								onError: T,
								onLoad: N,
								onClick: A,
								className: q,
								internalClassName: F,
							} = G,
							{ overrideElement: ee, shouldRenderDefault: V } = (0, b._)('image', G);
						if (!V) return ee;
						const [J, Y] = (0, n.J0)(!1),
							[te, x] = (0, n.J0)(!1),
							R = (0, n.li)('');
						(0, n.vJ)(() => {
							R.current = W;
						}),
							R.current && R.current != W && Y(!1);
						const M = (0, a.Z)(G, m);
						return (0, o.Y)(i._, {
							children: (0, o.Y)('div', {
								...M,
								className: d()('ss__image', { 'ss__image--hidden': !J }, q, F),
								children: (0, o.Y)('img', {
									src: (te ? P : W) || z,
									alt: K,
									title: Q || K,
									loading: w ? 'lazy' : void 0,
									onLoad: (v) => {
										Y(!0), N && N(v);
									},
									onClick: (v) => A && A(v),
									onError: (v) => {
										(v.target.src = z || ''), T && T(v);
									},
									onMouseOver: (v) => {
										P && x(!0), S && S(v);
									},
									onMouseOut: (v) => {
										P && x(!1), j && j(v);
									},
								}),
							}),
						});
					});
			},
			'./components/src/components/Molecules/Grid/Grid.tsx'(y, l, e) {
				'use strict';
				e.d(l, { x: () => Q });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					c = e('../../node_modules/classnames/index.js'),
					d = e.n(c),
					t = e('../../node_modules/deepmerge/dist/cjs.js'),
					i = e.n(t),
					p = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					u = e('../../node_modules/mobx-react-lite/es/index.js'),
					f = e('./components/src/providers/cache.tsx'),
					a = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					b = e('./components/src/providers/treePath.tsx'),
					_ = e('./components/src/hooks/useA11y.tsx'),
					m = e('./components/src/hooks/useLang.tsx'),
					I = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					O = e('./components/src/components/Atoms/Image/Image.tsx'),
					B = e('./components/src/utilities/cloneWithProps.tsx'),
					Z = e('./components/src/utilities/defined.ts'),
					X = e('./components/src/utilities/mergeProps.ts'),
					G = e('./components/src/utilities/mergeStyles.ts'),
					K = e('../../node_modules/colord/index.mjs'),
					W = e('../../node_modules/colord/plugins/names.mjs');
				(0, K.X$)([W.A]);
				const z = ({ gapSize: P, columns: w, theme: S, disableOverflowAction: j }) =>
						(0, n.AH)({
							'.ss__grid__options': {
								display: 'flex',
								flexFlow: 'row wrap',
								gridTemplateColumns: `repeat(${w}, 1fr)`,
								gap: P,
								gridAutoRows: '1fr',
								'.ss__grid__option': {
									display: 'flex',
									flexDirection: 'column',
									boxSizing: 'content-box',
									backgroundRepeat: 'no-repeat',
									backgroundSize: `calc(100% / ${w} - ${2 * Math.round((w + 2) / 2)}px)`,
									backgroundPosition: 'center !important',
									justifyContent: 'center',
									alignItems: 'center',
									flex: '0 1 auto',
									border: `1px solid ${S?.variables?.colors?.primary || '#333'}`,
									textAlign: 'center',
									wordBreak: 'break-all',
									padding: '1em 0',
									width: `calc(100% / ${w} - ${2 * Math.round((w + 2) / 2)}px)`,
									margin: `0 ${P} ${P} 0`,
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
									[`:nth-of-type(${w}n)`]: { marginRight: '0' },
									'&.ss__grid__option--selected': { border: `2px solid ${S?.variables?.colors?.primary || '#333'}` },
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
								'&:hover': { cursor: j ? 'initial !important' : 'pointer !important' },
							},
						}),
					Q = (0, u.PA)((P) => {
						const w = (0, a.u)(),
							j = { multiSelect: !1, columns: 4, gapSize: '8px', treePath: (0, b.LU)() },
							T = (0, X.v6)('grid', w, j, P),
							{
								titleText: N,
								onSelect: A,
								hideLabels: q,
								disableOverflowAction: F,
								multiSelect: ee,
								overflowButton: V,
								columns: J,
								rows: Y,
								hideShowLess: te,
								overflowButtonInGrid: x,
								disabled: R,
								options: M,
								disableStyles: v,
								onOverflowButtonClick: se,
								className: re,
								internalClassName: ie,
								treePath: ne,
								disableA11y: le,
							} = T,
							{ overrideElement: de, shouldRenderDefault: ce } = (0, I._)('grid', T);
						if (!ce) return de;
						const ue = { image: { internalClassName: 'ss__grid__image', ...(0, Z.s)({ disableStyles: v }), theme: T?.theme, treePath: ne } };
						let D = T.selected;
						const fe = (0, G.Z)(T, z);
						D && !Array.isArray(D) && (D = [D]);
						const [$, oe] = (0, s.J0)(D || []),
							[me] = (0, s.J0)(D || []);
						try {
							if (D) {
								const r = JSON.stringify(me),
									g = JSON.stringify(D),
									h = JSON.stringify($);
								r !== g && g !== h && oe(D);
							}
						} catch {}
						const pe = (r, g) => {
								if (ee) {
									let h;
									$.find((E) => E.value === g.value)
										? ((h = [...$]),
										  h.splice(
												h.findIndex((E) => E.value === g.value),
												1
										  ))
										: (h = [...$, g]),
										A && A(r, g, h),
										oe(h);
								} else A && A(r, g, [g]), oe([g]);
							},
							H = Y && J ? J * Y : M.length,
							L = Math.max(0, M.length - (H - (x ? 1 : 0))),
							[C, be] = (0, s.J0)(!!L),
							ae = () => {
								const r = te ? C : !0,
									g = { showMoreText: { value: x ? `+ ${L}` : 'Show More' }, showLessText: { value: x ? `- ${L}` : 'Show Less' } },
									h = i()(g, T.lang || {}),
									E = (0, m.u)(h, { limited: C, remainder: L });
								return r && L > 0 && M.length !== H
									? (0, o.Y)('div', {
											className: `ss__grid__show-more-wrapper ${x ? 'ss__grid__option' : ''}`,
											onClick: (U) => {
												!F && be(!C), se && se(U, !!C, L);
											},
											role: 'button',
											ref: (U) => (!le && !F ? (0, _.iy)(U) : null),
											...(C ? E.showMoreText.attributes : E.showLessText.attributes),
											children: V
												? (0, B.Y)(V, { limited: C, remainder: L, treePath: ne })
												: C
												? (0, o.Y)('span', { className: 'ss__grid__show-more', ...E.showMoreText.value })
												: L
												? (0, o.Y)('span', { className: 'ss__grid__show-less', ...E.showLessText.value })
												: null,
									  })
									: null;
							};
						return typeof M == 'object' && M?.length
							? (0, o.Y)(f._, {
									children: (0, o.FD)('div', {
										...fe,
										className: d()('ss__grid', R ? 'ss__grid--disabled' : '', re, ie),
										children: [
											N && (0, o.Y)('h5', { className: 'ss__grid__title', children: N }),
											(0, o.FD)('div', {
												className: 'ss__grid__options',
												children: [
													M.map((r, g) => {
														const h = $.some((k) => k.value == r.value);
														let E = !1;
														const U = r.background?.toLowerCase() || (r.backgroundImageUrl ? null : r.value.toString().toLowerCase());
														if (U)
															try {
																const k = (0, K.Mj)(U);
																k.isValid() && (E = k.isDark());
															} catch {}
														if (!C || M.length == H || g < H - (x ? 1 : 0))
															return (0, o.Y)('div', {
																className: d()('ss__grid__option', {
																	'ss__grid__option--selected': h,
																	'ss__grid__option--disabled': r?.disabled,
																	'ss__grid__option--unavailable': r?.available === !1,
																	'ss__grid__option--dark': E,
																}),
																onClick: (k) => !R && !r?.disabled && pe(k, r),
																ref: (k) => (0, _.iy)(k),
																title: r.label || r.value.toString(),
																role: 'option',
																'aria-selected': h,
																'aria-disabled': r.disabled,
																children: (0, o.FD)('div', {
																	className: d()('ss__grid__option__inner', `ss__grid__option__inner--${p.p(r.value.toString())}`),
																	style: { background: r.background ? r.background : r.backgroundImageUrl ? void 0 : r.value },
																	children: [
																		!r.background && r.backgroundImageUrl
																			? (0, o.Y)(O._, { ...ue.image, src: r.backgroundImageUrl, alt: r.label || r.value.toString() })
																			: null,
																		q ? null : (0, o.Y)('label', { className: 'ss__grid__option__label', children: r.label || r.value }),
																	],
																}),
															});
													}),
													x ? (0, o.Y)(ae, {}) : null,
												],
											}),
											x ? null : (0, o.Y)(ae, {}),
										],
									}),
							  })
							: null;
					});
			},
			'./components/src/hooks/useA11y.tsx'(y, l, e) {
				'use strict';
				e.d(l, { DH: () => c, aZ: () => s, iy: () => d });
				const o = 9,
					n = 27,
					s = 'ss-a11y',
					c =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function d(t, i, p, u) {
					const f = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${f}`)) {
						const a = document.createElement('style');
						(a.type = 'text/css'),
							(a.id = f),
							(a.innerHTML = `[${s}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(a);
					}
					t &&
						!t.attributes?.[s] &&
						(t.setAttribute(s, !0),
						t.setAttribute('tabIndex', `${i || 0}`),
						t.addEventListener('keydown', (a) => {
							(a.code === 'Space' || a.code === 'Enter') && t.click();
						}),
						p &&
							t.addEventListener('keydown', function (a) {
								const b = t.querySelectorAll(c),
									_ = b[0],
									m = b[b.length - 1];
								if (a.keyCode == n) {
									t.focus(), u && u(a), a.preventDefault(), a.stopPropagation();
									return;
								}
								(a.key === 'Tab' || a.keyCode === o) &&
									(a.shiftKey
										? document.activeElement === _ && (m.focus(), a.preventDefault())
										: document.activeElement === m && (_.focus(), a.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useLang.tsx'(y, l, e) {
				'use strict';
				e.d(l, { u: () => o });
				const o = (n, s) => {
					const c = {};
					return (
						Object.keys(n).forEach((d) => {
							const t = n && n[d],
								i = {};
							t &&
								(t?.value &&
									(typeof t.value == 'function'
										? (i.value = { 'ss-lang': d, dangerouslySetInnerHTML: { __html: t.value(s) } })
										: (i.value = { 'ss-lang': d, dangerouslySetInnerHTML: { __html: t.value } })),
								t?.attributes &&
									Object.keys(t?.attributes).length &&
									((i.attributes = { 'ss-lang': d }),
									t?.attributes?.['aria-label'] &&
										(typeof t.attributes?.['aria-label'] == 'function'
											? (i.attributes['aria-label'] = t.attributes['aria-label'](s))
											: (i.attributes['aria-label'] = t.attributes['aria-label'])),
									t?.attributes?.['aria-valuetext'] &&
										(typeof t.attributes?.['aria-valuetext'] == 'function'
											? (i.attributes['aria-valuetext'] = t.attributes['aria-valuetext'](s))
											: (i.attributes['aria-valuetext'] = t.attributes['aria-valuetext'])),
									t?.attributes?.title &&
										(typeof t.attributes?.title == 'function'
											? (i.attributes.title = t.attributes.title(s))
											: (i.attributes.title = t.attributes.title)),
									t?.attributes?.alt &&
										(typeof t.attributes?.alt == 'function' ? (i.attributes.alt = t.attributes.alt(s)) : (i.attributes.alt = t.attributes.alt)),
									t?.attributes?.placeholder &&
										(typeof t.attributes?.placeholder == 'function'
											? (i.attributes.placeholder = t.attributes.placeholder(s))
											: (i.attributes.placeholder = t.attributes.placeholder))),
								(i.all = { ...i.value, ...i.attributes, 'ss-lang': d })),
								(c[d] = i);
						}),
						c
					);
				};
			},
			'./components/src/utilities/componentArgs.ts'(y, l, e) {
				'use strict';
				e.d(l, { F: () => o });
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
			},
			'./components/src/utilities/defined.ts'(y, l, e) {
				'use strict';
				e.d(l, { s: () => o });
				function o(n) {
					const s = {};
					return (
						Object.keys(n).map((c) => {
							n[c] !== void 0 && (s[c] = n[c]);
						}),
						s
					);
				}
			},
			'./components/src/utilities/storybook.tsx'(y, l, e) {
				'use strict';
				e.d(l, { Z: () => c });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					n = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const s = 'prism-block',
					c = (d) => {
						const t = (0, n.li)(null);
						return (
							(0, n.vJ)(() => {
								t.current && d.className?.includes('lang-') && !d.className?.includes(s) && window?.Prism?.highlightElement(t.current);
							}, [d.className, d.children, t]),
							(0, o.Y)('code', { ...d, ref: t, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/colord/plugins/names.mjs'(y, l, e) {
				'use strict';
				e.d(l, { A: () => o }), Object.defineProperty(o, 'name', { value: 'default', configurable: !0 });
				function o(n, s) {
					var c = {
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
						d = {};
					for (var t in c) d[c[t]] = t;
					var i = {};
					(n.prototype.toName = function (p) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var u,
							f,
							a = d[this.toHex()];
						if (a) return a;
						if (p?.closest) {
							var b = this.toRgb(),
								_ = 1 / 0,
								m = 'black';
							if (!i.length) for (var I in c) i[I] = new n(c[I]).toRgb();
							for (var O in c) {
								var B = ((u = b), (f = i[O]), Math.pow(u.r - f.r, 2) + Math.pow(u.g - f.g, 2) + Math.pow(u.b - f.b, 2));
								B < _ && ((_ = B), (m = O));
							}
							return m;
						}
					}),
						s.string.push([
							function (p) {
								var u = p.toLowerCase(),
									f = u === 'transparent' ? '#0000' : c[u];
								return f ? new n(f).toRgb() : null;
							},
							'name',
						]);
				}
			},
			'../../node_modules/memoizerific sync recursive'(y) {
				function l(e) {
					var o = new Error("Cannot find module '" + e + "'");
					throw ((o.code = 'MODULE_NOT_FOUND'), o);
				}
				(l.keys = () => []), (l.resolve = l), (l.id = '../../node_modules/memoizerific sync recursive'), (y.exports = l);
			},
		},
	]);
})();
