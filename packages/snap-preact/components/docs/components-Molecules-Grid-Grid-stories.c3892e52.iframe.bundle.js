(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[4081],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(E, l, e) {
				'use strict';
				e.d(l, { p: () => o });
				function o(a) {
					if (typeof a != 'string') return a;
					let s = a.toLowerCase();
					return (s = s.replace(/[^\w\s]/g, '').trim()), (s = s.replace(/\s/g, '-')), s;
				}
			},
			'./components/src/components/Molecules/Grid/Grid.stories.tsx'(E, l, e) {
				'use strict';
				e.r(l),
					e.d(l, {
						Default: () => b,
						DisabledOption: () => u,
						Images: () => f,
						__namedExportsOrder: () => h,
						backgroundColors: () => r,
						default: () => i,
						overflow: () => g,
					});
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
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
										children: [(0, o.Y)(a.oz, { options: { overrides: { code: c.Z } }, children: t }), (0, o.Y)(a.uY, { story: a.h1 })],
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
					b = (m) => (0, o.Y)(s.x, { ...m });
				b.args = {
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
				const r = (m) => (0, o.Y)(s.x, { ...m });
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
				const g = (m) => (0, o.Y)(s.x, { ...m });
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
					(b.parameters = {
						...b.parameters,
						docs: { ...b.parameters?.docs, source: { originalSource: '(args: GridProps) => <Grid {...args} />', ...b.parameters?.docs?.source } },
					}),
					(u.parameters = {
						...u.parameters,
						docs: { ...u.parameters?.docs, source: { originalSource: '(args: GridProps) => <Grid {...args} />', ...u.parameters?.docs?.source } },
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
				const h = ['Default', 'DisabledOption', 'Images', 'backgroundColors', 'overflow'];
			},
			'./components/src/components/Atoms/Image/Image.tsx'(E, l, e) {
				'use strict';
				e.d(l, { _: () => A, t: () => h });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					s = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					c = e('../../node_modules/classnames/index.js'),
					d = e.n(c),
					t = e('./components/src/providers/cache.tsx'),
					i = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					b = e('./components/src/providers/snap.tsx'),
					u = e('./components/src/providers/treePath.tsx'),
					f = e('./components/src/utilities/mergeProps.ts'),
					r = e('./components/src/utilities/mergeStyles.ts'),
					g = e('./components/src/hooks/useComponent.tsx');
				const h = '//cdn.athoscommerce.net/snap/images/fallback.png',
					m = ({ height: O }) =>
						(0, s.AH)({
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							height: O || 'auto',
							'& img': { flexShrink: '0', objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' },
							'&.ss__image--hidden': { '& img': { visibility: 'hidden' } },
						});
				function A(O) {
					const I = (0, i.u)(),
						Q = (0, b.uk)(),
						q = (0, u.LU)(),
						ee = { fallback: h, lazy: !0, treePath: q },
						B = (0, f.v6)('image', I, ee, O),
						{
							alt: Y,
							src: U,
							fallback: N,
							title: L,
							hoverSrc: y,
							lazy: S,
							onMouseOver: R,
							onMouseOut: $,
							onError: P,
							onLoad: G,
							onClick: C,
							className: te,
							internalClassName: z,
							customComponent: F,
						} = B;
					if (F) {
						const p = (0, g.x)(Q?.templates?.library.import.component.image || {}, F);
						if (p) return (0, o.Y)(p, { ...B });
					}
					const [V, K] = (0, a.J0)(!1),
						[J, H] = (0, a.J0)(!1),
						w = (0, a.li)('');
					(0, a.vJ)(() => {
						w.current = U;
					}),
						w.current && w.current != U && K(!1);
					const Z = (0, r.Z)(B, m);
					return (0, o.Y)(t._, {
						children: (0, o.Y)('div', {
							...Z,
							className: d()('ss__image', { 'ss__image--hidden': !V }, te, z),
							children: (0, o.Y)('img', {
								src: (J ? y : U) || N,
								alt: Y,
								title: L || Y,
								loading: S ? 'lazy' : void 0,
								onLoad: (p) => {
									K(!0), G && G(p);
								},
								onClick: (p) => C && C(p),
								onError: (p) => {
									(p.target.src = N || ''), P && P(p);
								},
								onMouseOver: (p) => {
									y && H(!0), R && R(p);
								},
								onMouseOut: (p) => {
									y && H(!1), $ && $(p);
								},
							}),
						}),
					});
				}
			},
			'./components/src/components/Molecules/Grid/Grid.tsx'(E, l, e) {
				'use strict';
				e.d(l, { x: () => N });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					c = e('../../node_modules/classnames/index.js'),
					d = e.n(c),
					t = e('../../node_modules/deepmerge/dist/cjs.js'),
					i = e.n(t),
					b = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					u = e('./components/src/providers/cache.tsx'),
					f = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					r = e('./components/src/providers/snap.tsx'),
					g = e('./components/src/providers/treePath.tsx'),
					h = e('./components/src/hooks/useA11y.tsx'),
					m = e('./components/src/hooks/useLang.tsx'),
					A = e('./components/src/hooks/useComponent.tsx'),
					O = e('./components/src/components/Atoms/Image/Image.tsx'),
					I = e('./components/src/utilities/cloneWithProps.tsx'),
					Q = e('./components/src/utilities/defined.ts'),
					q = e('./components/src/utilities/mergeProps.ts'),
					ee = e('./components/src/utilities/mergeStyles.ts'),
					B = e('../../node_modules/colord/index.mjs'),
					Y = e('../../node_modules/colord/plugins/names.mjs');
				(0, B.X$)([Y.A]);
				const U = ({ gapSize: L, columns: y, theme: S, disableOverflowAction: R }) =>
					(0, a.AH)({
						'.ss__grid__options': {
							display: 'flex',
							flexFlow: 'row wrap',
							gridTemplateColumns: `repeat(${y}, 1fr)`,
							gap: L,
							gridAutoRows: '1fr',
							'.ss__grid__option': {
								display: 'flex',
								flexDirection: 'column',
								boxSizing: 'content-box',
								backgroundRepeat: 'no-repeat',
								backgroundSize: `calc(100% / ${y} - ${2 * Math.round((y + 2) / 2)}px)`,
								backgroundPosition: 'center !important',
								justifyContent: 'center',
								alignItems: 'center',
								flex: '0 1 auto',
								border: `1px solid ${S?.variables?.colors?.primary || '#333'}`,
								textAlign: 'center',
								wordBreak: 'break-all',
								padding: '1em 0',
								width: `calc(100% / ${y} - ${2 * Math.round((y + 2) / 2)}px)`,
								margin: `0 ${L} ${L} 0`,
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
								[`:nth-of-type(${y}n)`]: { marginRight: '0' },
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
							'&:hover': { cursor: R ? 'initial !important' : 'pointer !important' },
						},
					});
				function N(L) {
					const y = (0, f.u)(),
						S = (0, r.uk)(),
						$ = { multiSelect: !1, columns: 4, gapSize: '8px', treePath: (0, g.LU)() },
						P = (0, q.v6)('grid', y, $, L),
						{
							titleText: G,
							onSelect: C,
							hideLabels: te,
							disableOverflowAction: z,
							multiSelect: F,
							overflowButton: V,
							columns: K,
							rows: J,
							hideShowLess: H,
							overflowButtonInGrid: w,
							disabled: Z,
							options: p,
							disableStyles: ie,
							onOverflowButtonClick: se,
							className: le,
							internalClassName: de,
							treePath: ne,
							disableA11y: ce,
							customComponent: ae,
						} = P;
					if (ae) {
						const n = (0, A.x)(S?.templates?.library.import.component.grid || {}, ae);
						if (n) return (0, o.Y)(n, { ...P });
					}
					const ue = { image: { internalClassName: 'ss__grid__image', ...(0, Q.s)({ disableStyles: ie }), theme: P?.theme, treePath: ne } };
					let T = P.selected;
					const fe = (0, ee.Z)(P, U);
					T && !Array.isArray(T) && (T = [T]);
					const [W, oe] = (0, s.J0)(T || []),
						[me] = (0, s.J0)(T || []);
					try {
						if (T) {
							const n = JSON.stringify(me),
								_ = JSON.stringify(T),
								v = JSON.stringify(W);
							n !== _ && _ !== v && oe(T);
						}
					} catch {}
					const pe = (n, _) => {
							if (F) {
								let v;
								W.find((x) => x.value === _.value)
									? ((v = [...W]),
									  v.splice(
											v.findIndex((x) => x.value === _.value),
											1
									  ))
									: (v = [...W, _]),
									C && C(n, _, v),
									oe(v);
							} else C && C(n, _, [_]), oe([_]);
						},
						X = J && K ? K * J : p.length,
						M = Math.max(0, p.length - (X - (w ? 1 : 0))),
						[D, be] = (0, s.J0)(!!M),
						re = () => {
							const n = H ? D : !0,
								_ = { showMoreText: { value: w ? `+ ${M}` : 'Show More' }, showLessText: { value: w ? `- ${M}` : 'Show Less' } },
								v = i()(_, P.lang || {}),
								x = (0, m.u)(v, { limited: D, remainder: M });
							return n && M > 0 && p.length !== X
								? (0, o.Y)('div', {
										className: `ss__grid__show-more-wrapper ${w ? 'ss__grid__option' : ''}`,
										onClick: (j) => {
											!z && be(!D), se && se(j, !!D, M);
										},
										role: 'button',
										ref: (j) => (!ce && !z ? (0, h.iy)(j) : null),
										...(D ? x.showMoreText.attributes : x.showLessText.attributes),
										children: V
											? (0, I.Y)(V, { limited: D, remainder: M, treePath: ne })
											: D
											? (0, o.Y)('span', { className: 'ss__grid__show-more', ...x.showMoreText.value })
											: M
											? (0, o.Y)('span', { className: 'ss__grid__show-less', ...x.showLessText.value })
											: null,
								  })
								: null;
						};
					return typeof p == 'object' && p?.length
						? (0, o.Y)(u._, {
								children: (0, o.FD)('div', {
									...fe,
									className: d()('ss__grid', Z ? 'ss__grid--disabled' : '', le, de),
									children: [
										G && (0, o.Y)('h5', { className: 'ss__grid__title', children: G }),
										(0, o.FD)('div', {
											className: 'ss__grid__options',
											children: [
												p.map((n, _) => {
													const v = W.some((k) => k.value == n.value);
													let x = !1;
													const j = n.background?.toLowerCase() || (n.backgroundImageUrl ? null : n.value.toString().toLowerCase());
													if (j)
														try {
															const k = (0, B.Mj)(j);
															k.isValid() && (x = k.isDark());
														} catch {}
													if (!D || p.length == X || _ < X - (w ? 1 : 0))
														return (0, o.Y)('div', {
															className: d()('ss__grid__option', {
																'ss__grid__option--selected': v,
																'ss__grid__option--disabled': n?.disabled,
																'ss__grid__option--unavailable': n?.available === !1,
																'ss__grid__option--dark': x,
															}),
															onClick: (k) => !Z && !n?.disabled && pe(k, n),
															ref: (k) => (0, h.iy)(k),
															title: n.label || n.value.toString(),
															role: 'option',
															'aria-selected': v,
															'aria-disabled': n.disabled,
															children: (0, o.FD)('div', {
																className: d()('ss__grid__option__inner', `ss__grid__option__inner--${b.p(n.value.toString())}`),
																style: { background: n.background ? n.background : n.backgroundImageUrl ? void 0 : n.value },
																children: [
																	!n.background && n.backgroundImageUrl
																		? (0, o.Y)(O._, { ...ue.image, src: n.backgroundImageUrl, alt: n.label || n.value.toString() })
																		: null,
																	te ? null : (0, o.Y)('label', { className: 'ss__grid__option__label', children: n.label || n.value }),
																],
															}),
														});
												}),
												w ? (0, o.Y)(re, {}) : null,
											],
										}),
										w ? null : (0, o.Y)(re, {}),
									],
								}),
						  })
						: null;
				}
			},
			'./components/src/hooks/useA11y.tsx'(E, l, e) {
				'use strict';
				e.d(l, { DH: () => c, aZ: () => s, iy: () => d });
				const o = 9,
					a = 27,
					s = 'ss-a11y',
					c =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function d(t, i, b, u) {
					const f = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${f}`)) {
						const r = document.createElement('style');
						(r.type = 'text/css'),
							(r.id = f),
							(r.innerHTML = `[${s}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(r);
					}
					t &&
						!t.attributes?.[s] &&
						(t.setAttribute(s, !0),
						t.setAttribute('tabIndex', `${i || 0}`),
						t.addEventListener('keydown', (r) => {
							(r.code === 'Space' || r.code === 'Enter') && t.click();
						}),
						b &&
							t.addEventListener('keydown', function (r) {
								const g = t.querySelectorAll(c),
									h = g[0],
									m = g[g.length - 1];
								if (r.keyCode == a) {
									t.focus(), u && u(r), r.preventDefault(), r.stopPropagation();
									return;
								}
								(r.key === 'Tab' || r.keyCode === o) &&
									(r.shiftKey
										? document.activeElement === h && (m.focus(), r.preventDefault())
										: document.activeElement === m && (h.focus(), r.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useLang.tsx'(E, l, e) {
				'use strict';
				e.d(l, { u: () => o });
				const o = (a, s) => {
					const c = {};
					return (
						Object.keys(a).forEach((d) => {
							const t = a && a[d],
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
			'./components/src/utilities/componentArgs.ts'(E, l, e) {
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
			'./components/src/utilities/defined.ts'(E, l, e) {
				'use strict';
				e.d(l, { s: () => o });
				function o(a) {
					const s = {};
					return (
						Object.keys(a).map((c) => {
							a[c] !== void 0 && (s[c] = a[c]);
						}),
						s
					);
				}
			},
			'./components/src/utilities/storybook.tsx'(E, l, e) {
				'use strict';
				e.d(l, { Z: () => c });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const s = 'prism-block',
					c = (d) => {
						const t = (0, a.li)(null);
						return (
							(0, a.vJ)(() => {
								t.current && d.className?.includes('lang-') && !d.className?.includes(s) && window?.Prism?.highlightElement(t.current);
							}, [d.className, d.children, t]),
							(0, o.Y)('code', { ...d, ref: t, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/colord/plugins/names.mjs'(E, l, e) {
				'use strict';
				e.d(l, { A: () => o }), Object.defineProperty(o, 'name', { value: 'default', configurable: !0 });
				function o(a, s) {
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
					(a.prototype.toName = function (b) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var u,
							f,
							r = d[this.toHex()];
						if (r) return r;
						if (b?.closest) {
							var g = this.toRgb(),
								h = 1 / 0,
								m = 'black';
							if (!i.length) for (var A in c) i[A] = new a(c[A]).toRgb();
							for (var O in c) {
								var I = ((u = g), (f = i[O]), Math.pow(u.r - f.r, 2) + Math.pow(u.g - f.g, 2) + Math.pow(u.b - f.b, 2));
								I < h && ((h = I), (m = O));
							}
							return m;
						}
					}),
						s.string.push([
							function (b) {
								var u = b.toLowerCase(),
									f = u === 'transparent' ? '#0000' : c[u];
								return f ? new a(f).toRgb() : null;
							},
							'name',
						]);
				}
			},
			'../../node_modules/memoizerific sync recursive'(E) {
				function l(e) {
					var o = new Error("Cannot find module '" + e + "'");
					throw ((o.code = 'MODULE_NOT_FOUND'), o);
				}
				(l.keys = () => []), (l.resolve = l), (l.id = '../../node_modules/memoizerific sync recursive'), (E.exports = l);
			},
		},
	]);
})();
