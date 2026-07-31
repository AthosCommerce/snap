(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[7861],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(h, u, e) {
				'use strict';
				e.d(u, { p: () => o });
				function o(d) {
					if (typeof d != 'string') return d;
					let i = d.toLowerCase();
					return (i = i.replace(/[^\w\s]/g, '').trim()), (i = i.replace(/\s/g, '-')), i;
				}
			},
			'./components/src/components/Molecules/Swatches/Swatches.stories.tsx'(h, u, e) {
				'use strict';
				e.r(u),
					e.d(u, {
						Default: () => f,
						Disabled: () => g,
						GradientBackground: () => b,
						Grid: () => c,
						Images: () => m,
						__namedExportsOrder: () => P,
						default: () => t,
					});
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/mobx-react-lite/es/index.js'),
					i = e('../../node_modules/@storybook/blocks/dist/index.mjs'),
					s = e('./components/src/components/Molecules/Swatches/Swatches.tsx'),
					n = e('./components/src/utilities/storybook.tsx'),
					a = e('./components/src/utilities/componentArgs.ts');
				const r = `# Swatches

Renders a swatch component.

## Components Used
- Slideshow
- Swatches
- Image

## Usage
\`\`\`tsx
import { Swatches } from '@athoscommerce/snap-preact/components';
\`\`\`

### options
The required \`options\` prop specifies an array of options to render. Each option requires a value, but can optionally provide label, background, backgroundImageUrl, and disabled properties. 
if no background or backgroundImageUrl provided, the value will be used as the css background color. 

\`\`\`tsx
const options: SwatchOption = [
        {
            value: 'Rainbow',
            label: 'Rainbow',
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
        },
        {
            value: 'red',
            label: 'red',
            backgroundImageUrl:
                'https://htmlcolorcodes.com/assets/images/colors/dark-red-color-solid-background-1920x1080.png',
        },
		{ value: 'Blue', label: 'Blue' },
		{ value: 'Green', label: 'Green' },
		{ value: 'Orange', label: 'Orange', disabled: true },
		{ value: 'Tan', label: 'Tan' },
		{ value: 'Pink', label: 'Pink'},
		{ value: 'Black', label: 'Black' },
		{ value: 'White', label: 'White'},
	],

<Swatches options={options} />
\`\`\`

### type
The optional \`type\` prop specifies if what the swatch options should be rendered as. Type options are \`carousel\` or \`grid\`, with \`carousel\` as default. When a type is set, you can optionally pass additional child props to be spread in to each sub component. 

\`\`\`tsx
const carouselProps: Partial<CarouselProps> = {
    loop: true,
    nextButton: 'Next',
    prevButton: "Prev"
}

<Swatches options={options} type={"carousel"} carousel={carouselProps}/>
\`\`\`
or
\`\`\`tsx
const gridProps: Partial<GridProps> = {
    rows: 1, 
    columns: 6,
}

<Swatches options={options} type={"grid"} grid={gridProps}/>
\`\`\`

### hideLabels
The optional \`hideLabels\` prop specifies if option labels should be hidden. 

\`\`\`tsx
<Swatches options={options} hideLabels={true} />
\`\`\`

### onSelect
The optional \`onSelect\` prop specifies callback function to be called on option click. 

\`\`\`tsx
const onSelectFunc = (event, clickedOption) => {
    console.log(event, clickedOption)
}

<Swatches options={options} onSelect={onSelectFunc} />
\`\`\`

### titleText
The optional \`titleText\` prop specifies the text to be rendered in the Swatches title. 

\`\`\`tsx
<Swatches options={options} titleText={"Swatches Title"} />
\`\`\`

### selected
The optional \`selected\` prop specifies the selected option if the selected state is handled outside of the component. 

\`\`\`tsx

const selectedOption: SwatchOption = { value: 'Red', label: 'Red', disabled: false },

<Swatches options={options} selected={selectedOption} />
\`\`\`


### breakpoints
An object that modifies the responsive behavior of the swatches at various viewports. 

The object key specified the viewport for when the parameters will be applied. 

Depending on the \`type\` prop passed, the default configuration contains the following properties, however **\`any swatches props\`**, can be specified. 

\`\`\`js
    const defaultCarouselBreakpoints = {
		0: {
			carousel: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 10,
			}
		},
		768: {
			carousel: {
				slidesPerView: 3,
				slidesPerGroup: 3,
				spaceBetween: 10,
			}
		},
		1200: {
			carousel: {
				slidesPerView: 4,
				slidesPerGroup: 4,
				spaceBetween: 10,
			}
		},
	};

	const defaultGridBreakpoints = {
		0: {
			grid: {
				rows: 1, 
				columns: 5,
				overflowButtonInGrid: true,
				disableOverflowAction: true,
			}
		},
	};

    const customBreakpoints = {
        0: {
            type={'carousel'}
			carousel: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 10,
			},
            hideLabels: true,
            
		},
		768: {
            type={'carousel'}
			carousel: {
				slidesPerView: 3,
				slidesPerGroup: 3,
				spaceBetween: 10,
			},
            hideLabels: true,
		},
		1200: {
            type={'grid'}
			grid: {
				rows: 1, 
				columns: 5,
				overflowButtonInGrid: true,
				disableOverflowAction: true,
			}
		},
    }
\`\`\`

\`\`\`tsx
<Swatches options={options} breakpoints={customBreakpoints} />
\`\`\`

`,
					t = {
						title: 'Molecules/Swatches',
						component: s.l,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, o.FD)('div', {
										children: [(0, o.Y)(i.oz, { options: { overrides: { code: n.Z } }, children: r }), (0, o.Y)(i.uY, { story: i.h1 })],
									}),
							},
						},
						decorators: [(p) => (0, o.Y)('div', { style: { maxWidth: '300px' }, children: (0, o.Y)(p, {}) })],
						argTypes: {
							onSelect: {
								description: 'option onSelect event handler',
								table: { category: 'Templates Legal', type: { summary: 'function' } },
								control: { type: 'none' },
								action: 'onSelect',
							},
							options: {
								description: 'list of options to display',
								type: { required: !1 },
								table: { category: 'Templates Legal', type: { summary: 'SwatchOption[]' } },
								control: { type: 'object' },
							},
							selected: {
								description: 'Current selected option',
								type: { required: !1 },
								table: { category: 'Templates Legal', type: { summary: 'SwatchOption' } },
								control: { type: 'none' },
							},
							hideLabels: {
								description: 'enable/disable option labels',
								table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
								control: { type: 'boolean' },
							},
							breakpoints: {
								defaultValue: void 0,
								description: 'Carousel breakpoints',
								table: { type: { summary: 'object' }, defaultValue: { summary: 'Breakpoint object' } },
								control: { type: 'object' },
							},
							type: {
								description: 'swatches type to render',
								table: { category: 'Templates Legal', type: { summary: 'swatches type' }, defaultValue: { summary: 'carousel' } },
								control: { type: 'select', options: ['carousel', 'grid'] },
							},
							...a.F,
						},
					},
					l = (0, d.PA)(({ args: p }) => (0, o.Y)(s.l, { ...p })),
					f = (p) => (0, o.Y)(l, { args: p }),
					c = (p) => (0, o.Y)(l, { args: p }),
					g = (p) => (0, o.Y)(l, { args: p }),
					b = (p) => (0, o.Y)(l, { args: p }),
					m = (p) => (0, o.Y)(l, { args: p });
				(f.args = {
					options: [
						{ value: 'Red', label: 'Red', disabled: !1 },
						{ value: 'Blue', label: 'Blue', disabled: !1 },
						{ value: 'Green', label: 'Green', disabled: !1 },
						{ value: 'Orange', label: 'Orange', disabled: !1 },
						{ value: 'Tan', label: 'Tan', disabled: !1 },
						{ value: 'Pink', label: 'Pink', disabled: !1 },
						{ value: 'Black', label: 'Black', disabled: !1 },
						{ value: 'White', label: 'White', disabled: !1 },
					],
				}),
					(c.args = {
						options: [
							{ value: 'Red', label: 'Red', disabled: !1 },
							{ value: 'Blue', label: 'Blue', disabled: !1 },
							{ value: 'Green', label: 'Green', disabled: !1 },
							{ value: 'Orange', label: 'Orange', disabled: !1 },
							{ value: 'Tan', label: 'Tan', disabled: !1 },
							{ value: 'Pink', label: 'Pink', disabled: !1 },
							{ value: 'Black', label: 'Black', disabled: !1 },
							{ value: 'White', label: 'White', disabled: !1 },
						],
						type: 'grid',
					}),
					(g.args = {
						options: [
							{ value: 'Red', label: 'Red', disabled: !0 },
							{ value: 'Blue', label: 'Blue', disabled: !1 },
							{ value: 'Green', label: 'Green', disabled: !0 },
							{ value: 'Orange', label: 'Orange', disabled: !1 },
							{ value: 'Tan', label: 'Tan', disabled: !1 },
							{ value: 'Pink', label: 'Pink', disabled: !0 },
							{ value: 'Black', label: 'Black', disabled: !1 },
							{ value: 'White', label: 'White', disabled: !0 },
						],
						type: 'slideshow',
					}),
					(b.args = {
						options: [
							{
								value: 'Rainbow',
								label: 'Rainbow',
								disabled: !1,
								background: `linear-gradient(
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
            )`,
							},
							{ value: 'Red', label: 'Red', disabled: !0 },
							{ value: 'Blue', label: 'Blue', disabled: !1 },
							{ value: 'Green', label: 'Green', disabled: !0 },
							{ value: 'Orange', label: 'Orange', disabled: !1 },
							{ value: 'Tan', label: 'Tan', disabled: !1 },
						],
					}),
					(m.args = {
						carousel: { slidesPerView: 3, spaceBetween: 10 },
						breakpoints: {},
						options: [
							{
								value: 'Faded Khaki',
								backgroundImageUrl:
									'https://cdn.shopify.com/s/files/1/0677/2424/7298/files/25caa3be92e5680ba340a62dc99cac3f_1b83cffd-c611-42bf-b6d8-59a497fe2ec7_100x.jpg?v=1706125264',
							},
							{
								value: 'Indigo',
								backgroundImageUrl:
									'https://cdn.shopify.com/s/files/1/0677/2424/7298/files/4dae673375338093f817804c8da6305a_7de3d458-28f4-41d1-903a-b8916ef26dcb_100x.jpg',
							},
							{
								value: 'Mirage',
								backgroundImageUrl:
									'https://cdn.shopify.com/s/files/1/0677/2424/7298/files/a853b69a38627e53209e0cb98c90d154_63b6fc1d-2fe5-4c54-bb86-09bd4f7b550b_100x.jpg?v=1706125265',
							},
							{
								value: 'Toasted',
								backgroundImageUrl:
									'https://cdn.shopify.com/s/files/1/0677/2424/7298/files/77f9701fc6979aadbedec33a68398aaa_cecd6b05-9aea-4db1-b4f1-ac245da74abb_100x.jpg?v=1706125264',
							},
						],
					}),
					(f.parameters = {
						...f.parameters,
						docs: {
							...f.parameters?.docs,
							source: {
								originalSource: `(args: SwatchesProps) => {
  return <ObservableSelection args={args} />;
}`,
								...f.parameters?.docs?.source,
							},
						},
					}),
					(c.parameters = {
						...c.parameters,
						docs: {
							...c.parameters?.docs,
							source: {
								originalSource: `(args: SwatchesProps) => {
  return <ObservableSelection args={args} />;
}`,
								...c.parameters?.docs?.source,
							},
						},
					}),
					(g.parameters = {
						...g.parameters,
						docs: {
							...g.parameters?.docs,
							source: {
								originalSource: `(args: SwatchesProps) => {
  return <ObservableSelection args={args} />;
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
								originalSource: `(args: SwatchesProps) => {
  return <ObservableSelection args={args} />;
}`,
								...b.parameters?.docs?.source,
							},
						},
					}),
					(m.parameters = {
						...m.parameters,
						docs: {
							...m.parameters?.docs,
							source: {
								originalSource: `(args: SwatchesProps) => {
  return <ObservableSelection args={args} />;
}`,
								...m.parameters?.docs?.source,
							},
						},
					});
				const P = ['Default', 'Grid', 'Disabled', 'GradientBackground', 'Images'];
			},
			'./components/src/components/Atoms/Button/Button.tsx'(h, u, e) {
				'use strict';
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					i = e('../../node_modules/classnames/index.js'),
					s = e.n(i),
					n = e('../../node_modules/mobx-react-lite/es/index.js'),
					a = e('./components/src/providers/cache.tsx'),
					r = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					t = e('./components/src/providers/treePath.tsx'),
					l = e('./components/src/hooks/useA11y.tsx'),
					f = e('./components/src/utilities/cloneWithProps.tsx'),
					c = e('./components/src/utilities/defined.ts'),
					g = e('./components/src/utilities/mergeProps.ts'),
					b = e('./components/src/utilities/mergeStyles.ts'),
					m = e('./components/src/components/Atoms/Icon/Icon.tsx'),
					P = e('./components/src/hooks/useLang.tsx'),
					p = e('./components/src/hooks/useCustomComponentOverride.tsx'),
					x = e('../../node_modules/deepmerge/dist/cjs.js'),
					W = e.n(x);
				const K = ({ native: D, color: E, backgroundColor: B, borderColor: S, theme: _ }) =>
						D
							? (0, d.AH)({})
							: (0, d.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: E || _?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: B || '#fff',
									border: `1px solid ${S || E || _?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  }),
					T = (0, n.PA)((D) => {
						const E = (0, r.u)(),
							S = { disableA11y: !1, treePath: (0, t.LU)() },
							_ = (0, g.v6)('button', E, S, D),
							{
								content: M,
								children: w,
								disabled: k,
								native: A,
								onClick: L,
								disableA11y: C,
								disableStyles: G,
								className: Y,
								internalClassName: N,
								icon: y,
								lang: I,
								treePath: O,
								style: z,
								styleScript: F,
								themeStyleScript: j,
								...R
							} = _,
							{ overrideElement: v, shouldRenderDefault: Z } = (0, p._)('button', _);
						if (!Z) return v;
						const H = { icon: { internalClassName: 'ss__button__icon', ...(0, c.s)({ disableStyles: G }), theme: _?.theme, treePath: O } },
							$ = {
								...(0, b.Z)(_, K),
								className: s()('ss__button', { 'ss__button--native': A, 'ss__button--disabled': k }, Y, N),
								disabled: k,
								onClick: (V) => !k && L && L(V),
								...R,
							},
							J = { ref: (V) => (0, l.iy)(V) },
							X = {},
							Q = W()(X, I || {}),
							U = (0, P.u)(Q, {}, { activeBreakpoint: E?.activeBreakpoint }),
							q = !!R.dangerouslySetInnerHTML;
						return M || w || y || I?.button?.value || q
							? (0, o.Y)(a._, {
									children: A
										? (0, o.FD)('button', {
												...$,
												children: [
													(0, o.FD)('span', {
														className: 'ss__button__content',
														...U.button?.all,
														children: [(0, f.Y)(M, { treePath: O }), (0, f.Y)(w, { treePath: O })],
													}),
													y && (0, o.Y)(m.I, { ...H.icon, ...(typeof y == 'string' ? { icon: y } : y) }),
												],
										  })
										: (0, o.FD)('div', {
												...(C ? {} : J),
												role: 'button',
												'aria-disabled': k,
												...$,
												...U.button?.attributes,
												children: [
													M || w || U.button?.value
														? (0, o.FD)('span', {
																className: 'ss__button__content',
																...U.button?.value,
																children: [(0, f.Y)(M, { treePath: O }), (0, f.Y)(w, { treePath: O })],
														  })
														: void 0,
													y && (0, o.Y)(m.I, { ...H.icon, ...(typeof y == 'string' ? { icon: y } : y) }),
												],
										  }),
							  })
							: null;
					});
				e.d(u, ['$', 0, T]);
			},
			'./components/src/components/Atoms/Image/Image.tsx'(h, u, e) {
				'use strict';
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/preact/hooks/dist/hooks.module.js'),
					i = e('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					s = e('../../node_modules/classnames/index.js'),
					n = e.n(s),
					a = e('../../node_modules/mobx-react-lite/es/index.js'),
					r = e('./components/src/providers/cache.tsx'),
					t = e('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					l = e('./components/src/providers/treePath.tsx'),
					f = e('./components/src/utilities/mergeProps.ts'),
					c = e('./components/src/utilities/mergeStyles.ts'),
					g = e('./components/src/hooks/useCustomComponentOverride.tsx');
				const b = '//cdn.athoscommerce.net/snap/images/fallback.png',
					m = ({ height: p }) =>
						(0, i.AH)({
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							height: p || 'auto',
							'& img': { flexShrink: '0', objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' },
							'&.ss__image--hidden': { '& img': { visibility: 'hidden' } },
						}),
					P = (0, a.PA)((p) => {
						const x = (0, t.u)(),
							W = (0, l.LU)(),
							K = { fallback: b, lazy: !0, treePath: W },
							T = (0, f.v6)('image', x, K, p),
							{
								alt: D,
								src: E,
								fallback: B,
								title: S,
								hoverSrc: _,
								lazy: M,
								onMouseOver: w,
								onMouseOut: k,
								onError: A,
								onLoad: L,
								onClick: C,
								className: G,
								internalClassName: Y,
							} = T,
							{ overrideElement: N, shouldRenderDefault: y } = (0, g._)('image', T);
						if (!y) return N;
						const [I, O] = (0, d.J0)(!1),
							[z, F] = (0, d.J0)(!1),
							j = (0, d.li)('');
						(0, d.vJ)(() => {
							j.current = E;
						}),
							j.current && j.current != E && O(!1);
						const R = (0, c.Z)(T, m);
						return (0, o.Y)(r._, {
							children: (0, o.Y)('div', {
								...R,
								className: n()('ss__image', { 'ss__image--hidden': !I }, G, Y),
								children: (0, o.Y)('img', {
									src: (z ? _ : E) || B,
									alt: D,
									title: S || D,
									loading: M ? 'lazy' : void 0,
									onLoad: (v) => {
										O(!0), L && L(v);
									},
									onClick: (v) => C && C(v),
									onError: (v) => {
										(v.target.src = B || ''), A && A(v);
									},
									onMouseOver: (v) => {
										_ && F(!0), w && w(v);
									},
									onMouseOut: (v) => {
										_ && F(!1), k && k(v);
									},
								}),
							}),
						});
					});
				e.d(u, ['_', 0, P, 't', 0, b]);
			},
			'./components/src/hooks/useA11y.tsx'(h, u, e) {
				'use strict';
				e.d(u, { iy: () => n });
				const o = 9,
					d = 27,
					i = 'ss-a11y',
					s =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function n(a, r, t, l) {
					const f = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${f}`)) {
						const c = document.createElement('style');
						(c.type = 'text/css'),
							(c.id = f),
							(c.innerHTML = `[${i}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(c);
					}
					a &&
						!a.attributes?.[i] &&
						(a.setAttribute(i, !0),
						a.setAttribute('tabIndex', `${r || 0}`),
						a.addEventListener('keydown', (c) => {
							(c.code === 'Space' || c.code === 'Enter') && a.click();
						}),
						t &&
							a.addEventListener('keydown', function (c) {
								const g = a.querySelectorAll(s),
									b = g[0],
									m = g[g.length - 1];
								if (c.keyCode == d) {
									a.focus(), l && l(c), c.preventDefault(), c.stopPropagation();
									return;
								}
								(c.key === 'Tab' || c.keyCode === o) &&
									(c.shiftKey
										? document.activeElement === b && (m.focus(), c.preventDefault())
										: document.activeElement === m && (b.focus(), c.preventDefault()));
							}));
				}
				e.d(u, ['DH', 0, s, 'aZ', 0, i]);
			},
			'./components/src/hooks/useLang.tsx'(h, u, e) {
				'use strict';
				const o = (d, i, s) => {
					const n = s ? { ...i, ...s } : i,
						a = {};
					return (
						Object.keys(d).forEach((r) => {
							const t = d && d[r],
								l = {};
							t &&
								(t?.value &&
									(typeof t.value == 'function'
										? (l.value = { 'ss-lang': r, dangerouslySetInnerHTML: { __html: t.value(n) } })
										: (l.value = { 'ss-lang': r, dangerouslySetInnerHTML: { __html: t.value } })),
								t?.attributes &&
									Object.keys(t?.attributes).length &&
									((l.attributes = { 'ss-lang': r }),
									t?.attributes?.['aria-label'] &&
										(typeof t.attributes?.['aria-label'] == 'function'
											? (l.attributes['aria-label'] = t.attributes['aria-label'](n))
											: (l.attributes['aria-label'] = t.attributes['aria-label'])),
									t?.attributes?.['aria-valuetext'] &&
										(typeof t.attributes?.['aria-valuetext'] == 'function'
											? (l.attributes['aria-valuetext'] = t.attributes['aria-valuetext'](n))
											: (l.attributes['aria-valuetext'] = t.attributes['aria-valuetext'])),
									t?.attributes?.title &&
										(typeof t.attributes?.title == 'function'
											? (l.attributes.title = t.attributes.title(n))
											: (l.attributes.title = t.attributes.title)),
									t?.attributes?.alt &&
										(typeof t.attributes?.alt == 'function' ? (l.attributes.alt = t.attributes.alt(n)) : (l.attributes.alt = t.attributes.alt)),
									t?.attributes?.placeholder &&
										(typeof t.attributes?.placeholder == 'function'
											? (l.attributes.placeholder = t.attributes.placeholder(n))
											: (l.attributes.placeholder = t.attributes.placeholder))),
								(l.all = { ...l.value, ...l.attributes, 'ss-lang': r })),
								(a[r] = l);
						}),
						a
					);
				};
				e.d(u, ['u', 0, o]);
			},
			'./components/src/utilities/componentArgs.ts'(h, u, e) {
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
				e.d(u, ['F', 0, o]);
			},
			'./components/src/utilities/defined.ts'(h, u, e) {
				'use strict';
				e.d(u, { s: () => o });
				function o(d) {
					const i = {};
					return (
						Object.keys(d).map((s) => {
							d[s] !== void 0 && (i[s] = d[s]);
						}),
						i
					);
				}
			},
			'./components/src/utilities/storybook.tsx'(h, u, e) {
				'use strict';
				var o = e('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					d = e('../../node_modules/preact/hooks/dist/hooks.module.js');
				const i = 'prism-block',
					s = (n) => {
						const a = (0, d.li)(null);
						return (
							(0, d.vJ)(() => {
								a.current && n.className?.includes('lang-') && !n.className?.includes(i) && window?.Prism?.highlightElement(a.current);
							}, [n.className, n.children, a]),
							(0, o.Y)('code', { ...n, ref: a, 'data-prismjs-copy': 'Copy' })
						);
					};
				e.d(u, ['Z', 0, s]);
			},
			'../../node_modules/colord/plugins/names.mjs'(h, u, e) {
				'use strict';
				e.d(u, { A: () => o }), e.dn(o);
				function o(d, i) {
					var s = {
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
						n = {};
					for (var a in s) n[s[a]] = a;
					var r = {};
					(d.prototype.toName = function (t) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var l,
							f,
							c = n[this.toHex()];
						if (c) return c;
						if (t?.closest) {
							var g = this.toRgb(),
								b = 1 / 0,
								m = 'black';
							if (!r.length) for (var P in s) r[P] = new d(s[P]).toRgb();
							for (var p in s) {
								var x = ((l = g), (f = r[p]), Math.pow(l.r - f.r, 2) + Math.pow(l.g - f.g, 2) + Math.pow(l.b - f.b, 2));
								x < b && ((b = x), (m = p));
							}
							return m;
						}
					}),
						i.string.push([
							function (t) {
								var l = t.toLowerCase(),
									f = l === 'transparent' ? '#0000' : s[l];
								return f ? new d(f).toRgb() : null;
							},
							'name',
						]);
				}
			},
			'../../node_modules/dequal/dist/index.mjs'(h, u, e) {
				'use strict';
				e.d(u, { j: () => i });
				var o = Object.prototype.hasOwnProperty;
				function d(s, n, a) {
					for (a of s.keys()) if (i(a, n)) return a;
				}
				function i(s, n) {
					var a, r, t;
					if (s === n) return !0;
					if (s && n && (a = s.constructor) === n.constructor) {
						if (a === Date) return s.getTime() === n.getTime();
						if (a === RegExp) return s.toString() === n.toString();
						if (a === Array) {
							if ((r = s.length) === n.length) for (; r-- && i(s[r], n[r]); );
							return r === -1;
						}
						if (a === Set) {
							if (s.size !== n.size) return !1;
							for (r of s) if (((t = r), (t && typeof t == 'object' && ((t = d(n, t)), !t)) || !n.has(t))) return !1;
							return !0;
						}
						if (a === Map) {
							if (s.size !== n.size) return !1;
							for (r of s) if (((t = r[0]), (t && typeof t == 'object' && ((t = d(n, t)), !t)) || !i(r[1], n.get(t)))) return !1;
							return !0;
						}
						if (a === ArrayBuffer) (s = new Uint8Array(s)), (n = new Uint8Array(n));
						else if (a === DataView) {
							if ((r = s.byteLength) === n.byteLength) for (; r-- && s.getInt8(r) === n.getInt8(r); );
							return r === -1;
						}
						if (ArrayBuffer.isView(s)) {
							if ((r = s.byteLength) === n.byteLength) for (; r-- && s[r] === n[r]; );
							return r === -1;
						}
						if (!a || typeof s == 'object') {
							r = 0;
							for (a in s) if ((o.call(s, a) && ++r && !o.call(n, a)) || !(a in n) || !i(s[a], n[a])) return !1;
							return Object.keys(n).length === r;
						}
					}
					return s !== s && n !== n;
				}
			},
			'../../node_modules/memoizerific sync recursive'(h) {
				function u(e) {
					const o = new Error("Cannot find module '" + e + "'");
					throw ((o.code = 'MODULE_NOT_FOUND'), o);
				}
				(u.keys = () => []), (u.resolve = u), (u.id = '../../node_modules/memoizerific sync recursive'), (h.exports = u);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-Swatches-Swatches-stories.275e4138.iframe.bundle.js.map
