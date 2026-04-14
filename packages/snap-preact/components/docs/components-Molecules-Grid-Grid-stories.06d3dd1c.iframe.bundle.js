(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[4081],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(O, l, e) {
				'use strict';
				e.d(l, { p: () => o });
				function o(a) {
					if (typeof a != 'string') return a;
					let s = a.toLowerCase();
					return (s = s.replace(/[^\w\s]/g, '').trim()), (s = s.replace(/\s/g, '-')), s;
				}
			},
			'./components/src/components/Molecules/Grid/Grid.stories.tsx'(O, l, e) {
				'use strict';
				e.r(l),
					e.d(l, {
						Default: () => h,
						DisabledOption: () => f,
						Images: () => g,
						__namedExportsOrder: () => w,
						backgroundColors: () => r,
						default: () => i,
						overflow: () => p,
					});
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					s = e('./components/src/components/Molecules/Grid/Grid.tsx'),
					m = e('./components/src/utilities/storybook.tsx'),
					c = e('./components/src/utilities/componentArgs.ts');
				const t = `# Grid

Renders an Grid of options

## Components Used
- image

## Usage
\`\`\`jsx
import { Grid } from '@athoscommerce/snap-preact/components';
\`\`\`

### options
The required \`options\` prop specifies an array of options to render.

\`\`\`jsx
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

\`\`\`jsx
<Grid options={options} gapsize={'15px'} />
\`\`\`

### columns
The optional \`columns\` prop specifies the number of columns to show in the grid. (defaults to 4)

\`\`\`jsx
<Grid options={options} columns={3} />
\`\`\`

### rows
The optional \`rows\` prop specifies the number of rows to show in the grid. Should be noted that if more \`options\` are passed than are allowed via \`columns\` and \`rows\` props, then the component will hide the overflow options behind a \`+ 4 more\` overflow button. 

\`\`\`jsx
<Grid options={options} rows={2} />
\`\`\`

### disableOverflowAction
The optional \`disableOverflowAction\` prop will disable the overflow action from the overflow button (\`+ 4 more\`s). This is to be used when you want the overflow button to show render but you do not want the grid to expand and show all options onclick of the overflow button. 

\`\`\`jsx
<Grid options={options} rows={2} disableOverflowAction={true}/>
\`\`\`

### overflowButton
The optional \`overflowButton\` prop accepts a custom JSX element to render instead of the default overflow button. The custom component will be passed the current expanded state of the grid, as well as the number of options hidden 

\`\`\`jsx

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

\`\`\`jsx
<Grid options={options} overflowButtonInGrid={true} />
\`\`\`

### onOverflowButtonClick
The optional \`onOverflowButtonClick\` prop specifies to custom function to call onClick of the overflow button. 

\`\`\`jsx
const onOverflowButtonClick = (expandedState: boolean, remainder: number) => {
    console.log(expandedState, remainder);
}

<Grid options={options} onOverflowButtonClick={onOverflowButtonClick} />
\`\`\`

### hideLabels
The optional \`hideLabels\` prop specifies if option labels should be hidden. 

\`\`\`jsx
<Grid options={options} hideLabels={true} />
\`\`\`

### hideShowLess
The optional \`hideShowLess\` prop specifies if show less button should be hidden. 

\`\`\`jsx
<Grid options={options} hideShowLess={true} />
\`\`\`

### multiselect
The optional \`multiselect\` prop specifies if more than a single option can be selected at once. 

\`\`\`jsx
<Grid options={options} multiselect={true} />
\`\`\`

### onSelect
The optional \`onSelect\` prop specifies callback function to be called on option click. 

\`\`\`jsx
const onSelectFunc = (event, clickedOption, currenctlySelectedOptionArray) => {
    console.log(event, clickedOption, currenctlySelectedOptionArray)
}

<Grid options={options} onSelect={onSelectFunc} />
\`\`\`

### titleText
The optional \`titleText\` prop specifies the text to be rendered in the grid title. 

\`\`\`jsx
<Grid options={options} titleText={"Grid Title"} />
\`\`\`

### selected
The optional \`selected\` prop specifies the selected option(s) if the selected state is handled outside of the component. 

\`\`\`jsx

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
										children: [(0, o.Y)(a.oz, { options: { overrides: { code: m.Z } }, children: t }), (0, o.Y)(a.uY, { story: a.h1 })],
									}),
							},
						},
						decorators: [(u) => (0, o.Y)('div', { style: { maxWidth: '500px' }, children: (0, o.Y)(u, {}) })],
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
							...c.F,
						},
					},
					h = (u) => (0, o.Y)(s.x, { ...u });
				h.args = {
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
				const f = (u) => (0, o.Y)(s.x, { ...u });
				f.args = {
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
				const g = (u) => (0, o.Y)(s.x, { ...u });
				g.args = {
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
				const r = (u) => (0, o.Y)(s.x, { ...u });
				r.args = {
					options: [
						{ value: 'red', background: 'red' },
						{ value: 'blue', background: 'blue' },
						{ value: 'white', background: 'white', disabled: !0 },
						{ value: 'green', background: 'green' },
						{ value: 'yellow', background: 'yellow' },
					],
					hideLabels: !0,
					columns: 5,
					overflowButtonInGrid: !0,
					rows: 1,
				};
				const p = (u) => (0, o.Y)(s.x, { ...u });
				(p.args = {
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
					(h.parameters = {
						...h.parameters,
						docs: { ...h.parameters?.docs, source: { originalSource: '(args: GridProps) => <Grid {...args} />', ...h.parameters?.docs?.source } },
					}),
					(f.parameters = {
						...f.parameters,
						docs: { ...f.parameters?.docs, source: { originalSource: '(args: GridProps) => <Grid {...args} />', ...f.parameters?.docs?.source } },
					}),
					(g.parameters = {
						...g.parameters,
						docs: { ...g.parameters?.docs, source: { originalSource: '(args: GridProps) => <Grid {...args} />', ...g.parameters?.docs?.source } },
					}),
					(r.parameters = {
						...r.parameters,
						docs: { ...r.parameters?.docs, source: { originalSource: '(args: GridProps) => <Grid {...args} />', ...r.parameters?.docs?.source } },
					}),
					(p.parameters = {
						...p.parameters,
						docs: { ...p.parameters?.docs, source: { originalSource: '(args: GridProps) => <Grid {...args} />', ...p.parameters?.docs?.source } },
					});
				const w = ['Default', 'DisabledOption', 'Images', 'backgroundColors', 'overflow'];
			},
			'./components/src/components/Atoms/Image/Image.tsx'(O, l, e) {
				'use strict';
				e.d(l, { _: () => H, t: () => w });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					s = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					m = e('../../node_modules/classnames/index.js'),
					c = e.n(m),
					t = e('./components/src/providers/cache.tsx'),
					i = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					h = e('./components/src/providers/snap.tsx'),
					f = e('./components/src/providers/treePath.tsx'),
					g = e('./components/src/utilities/mergeProps.ts'),
					r = e('./components/src/utilities/mergeStyles.ts'),
					p = e('./components/src/hooks/useComponent.tsx');
				const w = '//cdn.athoscommerce.net/snap/images/fallback.png',
					u = ({ height: A }) =>
						(0, s.AH)({
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							height: A || 'auto',
							'& img': { flexShrink: '0', objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' },
							'&.ss__image--hidden': { '& img': { visibility: 'hidden' } },
						});
				function H(A) {
					const Z = (0, i.u)(),
						X = (0, h.uk)(),
						Q = (0, f.LU)(),
						q = { fallback: w, lazy: !0, treePath: Q },
						B = (0, g.v6)('image', Z, q, A),
						{
							alt: R,
							src: S,
							fallback: K,
							title: L,
							hoverSrc: v,
							lazy: I,
							onMouseOver: j,
							onMouseOut: W,
							onError: P,
							onLoad: k,
							onClick: C,
							className: ee,
							internalClassName: Y,
							customComponent: N,
						} = B;
					if (N) {
						const d = (0, p.x)(X?.templates?.library.import.component.image || {}, N);
						if (d) return (0, o.Y)(d, { ...B });
					}
					const [$, U] = (0, a.J0)(!1),
						[z, F] = (0, a.J0)(!1),
						y = (0, a.li)('');
					(0, a.vJ)(() => {
						y.current = S;
					}),
						y.current && y.current != S && U(!1);
					const V = (0, r.Z)(B, u);
					return (0, o.Y)(t._, {
						children: (0, o.Y)('div', {
							...V,
							className: c()('ss__image', { 'ss__image--hidden': !$ }, ee, Y),
							children: (0, o.Y)('img', {
								src: (z ? v : S) || K,
								alt: R,
								title: L || R,
								loading: I ? 'lazy' : void 0,
								onLoad: (d) => {
									U(!0), k && k(d);
								},
								onClick: (d) => C && C(d),
								onError: (d) => {
									(d.target.src = K || ''), P && P(d);
								},
								onMouseOver: (d) => {
									v && F(!0), j && j(d);
								},
								onMouseOut: (d) => {
									v && F(!1), W && W(d);
								},
							}),
						}),
					});
				}
			},
			'./components/src/components/Molecules/Grid/Grid.tsx'(O, l, e) {
				'use strict';
				e.d(l, { x: () => K });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					m = e('../../node_modules/classnames/index.js'),
					c = e.n(m),
					t = e('../../node_modules/deepmerge/dist/cjs.js'),
					i = e.n(t),
					h = e('../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'),
					f = e('./components/src/providers/cache.tsx'),
					g = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					r = e('./components/src/providers/snap.tsx'),
					p = e('./components/src/providers/treePath.tsx'),
					w = e('./components/src/hooks/useA11y.tsx'),
					u = e('./components/src/hooks/useLang.tsx'),
					H = e('./components/src/hooks/useComponent.tsx'),
					A = e('./components/src/components/Atoms/Image/Image.tsx'),
					Z = e('./components/src/utilities/cloneWithProps.tsx'),
					X = e('./components/src/utilities/defined.ts'),
					Q = e('./components/src/utilities/mergeProps.ts'),
					q = e('./components/src/utilities/mergeStyles.ts'),
					B = e('../../node_modules/color/index.js'),
					R = e.n(B);
				const S = ({ gapSize: L, columns: v, theme: I, disableOverflowAction: j }) =>
					(0, a.AH)({
						'.ss__grid__options': {
							display: 'flex',
							flexFlow: 'row wrap',
							gridTemplateColumns: `repeat(${v}, 1fr)`,
							gap: L,
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
								border: `1px solid ${I?.variables?.colors?.primary || '#333'}`,
								textAlign: 'center',
								wordBreak: 'break-all',
								padding: '1em 0',
								width: `calc(100% / ${v} - ${2 * Math.round((v + 2) / 2)}px)`,
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
								[`:nth-of-type(${v}n)`]: { marginRight: '0' },
								'&.ss__grid__option--selected': { border: `2px solid ${I?.variables?.colors?.primary || '#333'}` },
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
					});
				function K(L) {
					const v = (0, g.u)(),
						I = (0, r.uk)(),
						W = { multiSelect: !1, columns: 4, gapSize: '8px', treePath: (0, p.LU)() },
						P = (0, Q.v6)('grid', v, W, L),
						{
							titleText: k,
							onSelect: C,
							hideLabels: ee,
							disableOverflowAction: Y,
							multiSelect: N,
							overflowButton: $,
							columns: U,
							rows: z,
							hideShowLess: F,
							overflowButtonInGrid: y,
							disabled: V,
							options: d,
							disableStyles: ae,
							onOverflowButtonClick: oe,
							className: ie,
							internalClassName: le,
							treePath: se,
							disableA11y: ce,
							customComponent: ne,
						} = P;
					if (ne) {
						const n = (0, H.x)(I?.templates?.library.import.component.grid || {}, ne);
						if (n) return (0, o.Y)(n, { ...P });
					}
					const de = { image: { internalClassName: 'ss__grid__image', ...(0, X.s)({ disableStyles: ae }), theme: P?.theme, treePath: se } };
					let T = P.selected;
					const ue = (0, q.Z)(P, S);
					T && !Array.isArray(T) && (T = [T]);
					const [G, te] = (0, s.J0)(T || []),
						[me] = (0, s.J0)(T || []);
					try {
						if (T) {
							const n = JSON.stringify(me),
								_ = JSON.stringify(T),
								b = JSON.stringify(G);
							n !== _ && _ !== b && te(T);
						}
					} catch {}
					const pe = (n, _) => {
							if (N) {
								let b;
								G.find((E) => E.value === _.value)
									? ((b = [...G]),
									  b.splice(
											b.findIndex((E) => E.value === _.value),
											1
									  ))
									: (b = [...G, _]),
									C && C(n, _, b),
									te(b);
							} else C && C(n, _, [_]), te([_]);
						},
						J = z && U ? U * z : d.length,
						D = Math.max(0, d.length - (J - (y ? 1 : 0))),
						[M, _e] = (0, s.J0)(!!D),
						re = () => {
							const n = F ? M : !0,
								_ = { showMoreText: { value: y ? `+ ${D}` : 'Show More' }, showLessText: { value: y ? `- ${D}` : 'Show Less' } },
								b = i()(_, P.lang || {}),
								E = (0, u.u)(b, { limited: M, remainder: D });
							return n && D > 0 && d.length !== J
								? (0, o.Y)('div', {
										className: `ss__grid__show-more-wrapper ${y ? 'ss__grid__option' : ''}`,
										onClick: (x) => {
											!Y && _e(!M), oe && oe(x, !!M, D);
										},
										role: 'button',
										ref: (x) => (!ce && !Y ? (0, w.iy)(x) : null),
										...(M ? E.showMoreText.attributes : E.showLessText.attributes),
										children: $
											? (0, Z.Y)($, { limited: M, remainder: D, treePath: se })
											: M
											? (0, o.Y)('span', { className: 'ss__grid__show-more', ...E.showMoreText.value })
											: D
											? (0, o.Y)('span', { className: 'ss__grid__show-less', ...E.showLessText.value })
											: null,
								  })
								: null;
						};
					return typeof d == 'object' && d?.length
						? (0, o.Y)(f._, {
								children: (0, o.FD)('div', {
									...ue,
									className: c()('ss__grid', V ? 'ss__grid--disabled' : '', ie, le),
									children: [
										k && (0, o.Y)('h5', { className: 'ss__grid__title', children: k }),
										(0, o.FD)('div', {
											className: 'ss__grid__options',
											children: [
												d.map((n, _) => {
													const b = G.some((x) => x.value == n.value);
													let E = !1;
													try {
														E = new (R())(
															n.background ? n.background.toLowerCase() : n.backgroundImageUrl ? '' : n.value.toString().toLowerCase()
														).isDark();
													} catch {}
													if (!M || d.length == J || _ < J - (y ? 1 : 0))
														return (0, o.Y)('div', {
															className: c()('ss__grid__option', {
																'ss__grid__option--selected': b,
																'ss__grid__option--disabled': n?.disabled,
																'ss__grid__option--unavailable': n?.available === !1,
																'ss__grid__option--dark': E,
															}),
															onClick: (x) => !V && !n?.disabled && pe(x, n),
															ref: (x) => (0, w.iy)(x),
															title: n.label || n.value.toString(),
															role: 'option',
															'aria-selected': b,
															'aria-disabled': n.disabled,
															children: (0, o.FD)('div', {
																className: c()('ss__grid__option__inner', `ss__grid__option__inner--${h.p(n.value.toString())}`),
																style: { background: n.background ? n.background : n.backgroundImageUrl ? void 0 : n.value },
																children: [
																	!n.background && n.backgroundImageUrl
																		? (0, o.Y)(A._, { ...de.image, src: n.backgroundImageUrl, alt: n.label || n.value.toString() })
																		: null,
																	ee ? null : (0, o.Y)('label', { className: 'ss__grid__option__label', children: n.label || n.value }),
																],
															}),
														});
												}),
												y ? (0, o.Y)(re, {}) : null,
											],
										}),
										y ? null : (0, o.Y)(re, {}),
									],
								}),
						  })
						: null;
				}
			},
			'./components/src/hooks/useA11y.tsx'(O, l, e) {
				'use strict';
				e.d(l, { DH: () => m, aZ: () => s, iy: () => c });
				const o = 9,
					a = 27,
					s = 'ss-a11y',
					m =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function c(t, i, h, f) {
					const g = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${g}`)) {
						const r = document.createElement('style');
						(r.type = 'text/css'),
							(r.id = g),
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
						h &&
							t.addEventListener('keydown', function (r) {
								const p = t.querySelectorAll(m),
									w = p[0],
									u = p[p.length - 1];
								if (r.keyCode == a) {
									t.focus(), f && f(r), r.preventDefault(), r.stopPropagation();
									return;
								}
								(r.key === 'Tab' || r.keyCode === o) &&
									(r.shiftKey
										? document.activeElement === w && (u.focus(), r.preventDefault())
										: document.activeElement === u && (w.focus(), r.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useLang.tsx'(O, l, e) {
				'use strict';
				e.d(l, { u: () => o });
				const o = (a, s) => {
					const m = {};
					return (
						Object.keys(a).forEach((c) => {
							const t = a && a[c],
								i = {};
							t &&
								(t?.value &&
									(typeof t.value == 'function'
										? (i.value = { 'ss-lang': c, dangerouslySetInnerHTML: { __html: t.value(s) } })
										: (i.value = { 'ss-lang': c, dangerouslySetInnerHTML: { __html: t.value } })),
								t?.attributes &&
									Object.keys(t?.attributes).length &&
									((i.attributes = { 'ss-lang': c }),
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
								(i.all = { ...i.value, ...i.attributes, 'ss-lang': c })),
								(m[c] = i);
						}),
						m
					);
				};
			},
			'./components/src/utilities/componentArgs.ts'(O, l, e) {
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
			'./components/src/utilities/defined.ts'(O, l, e) {
				'use strict';
				e.d(l, { s: () => o });
				function o(a) {
					const s = {};
					return (
						Object.keys(a).map((m) => {
							a[m] !== void 0 && (s[m] = a[m]);
						}),
						s
					);
				}
			},
			'./components/src/utilities/storybook.tsx'(O, l, e) {
				'use strict';
				e.d(l, { Z: () => m });
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					a = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const s = 'prism-block',
					m = (c) => {
						const t = (0, a.li)(null);
						return (
							(0, a.vJ)(() => {
								t.current && c.className?.includes('lang-') && !c.className?.includes(s) && window?.Prism?.highlightElement(t.current);
							}, [c.className, c.children, t]),
							(0, o.Y)('code', { ...c, ref: t, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/memoizerific sync recursive'(O) {
				function l(e) {
					var o = new Error("Cannot find module '" + e + "'");
					throw ((o.code = 'MODULE_NOT_FOUND'), o);
				}
				(l.keys = () => []), (l.resolve = l), (l.id = '../../node_modules/memoizerific sync recursive'), (O.exports = l);
			},
		},
	]);
})();
