(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[7861],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(v, c, t) {
				'use strict';
				t.d(c, { p: () => a });
				function a(i) {
					if (typeof i != 'string') return i;
					let r = i.toLowerCase();
					return (r = r.replace(/[^\w\s]/g, '').trim()), (r = r.replace(/\s/g, '-')), r;
				}
			},
			'./components/src/components/Molecules/Swatches/Swatches.stories.tsx'(v, c, t) {
				'use strict';
				t.r(c),
					t.d(c, {
						Default: () => f,
						Disabled: () => m,
						GradientBackground: () => b,
						Grid: () => l,
						Images: () => g,
						__namedExportsOrder: () => B,
						default: () => d,
					});
				var a = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = t('../../node_modules/mobx-react-lite/es/index.js'),
					r = t('../../node_modules/@storybook/blocks/dist/index.mjs'),
					o = t('./components/src/components/Molecules/Swatches/Swatches.tsx'),
					n = t('./components/src/utilities/storybook.tsx'),
					e = t('./components/src/utilities/componentArgs.ts');
				const s = `# Swatches

Renders a swatch component.

## Components Used
- Slideshow
- Swatches
- Image

## Usage
\`\`\`jsx
import { Swatches } from '@athoscommerce/snap-preact/components';
\`\`\`

### options
The required \`options\` prop specifies an array of options to render. Each option requires a value, but can optionally provide label, background, backgroundImageUrl, and disabled properties. 
if no background or backgroundImageUrl provided, the value will be used as the css background color. 

\`\`\`jsx
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

\`\`\`jsx
const carouselProps: Partial<CarouselProps> = {
    loop: true,
    nextButton: 'Next',
    prevButton: "Prev"
}

<Swatches options={options} type={"carousel"} carousel={carouselProps}/>
\`\`\`
or
\`\`\`jsx
const gridProps: Partial<GridProps> = {
    rows: 1, 
    columns: 6,
}

<Swatches options={options} type={"grid"} grid={gridProps}/>
\`\`\`

### hideLabels
The optional \`hideLabels\` prop specifies if option labels should be hidden. 

\`\`\`jsx
<Swatches options={options} hideLabels={true} />
\`\`\`

### onSelect
The optional \`onSelect\` prop specifies callback function to be called on option click. 

\`\`\`jsx
const onSelectFunc = (event, clickedOption) => {
    console.log(event, clickedOption)
}

<Swatches options={options} onSelect={onSelectFunc} />
\`\`\`

### titleText
The optional \`titleText\` prop specifies the text to be rendered in the Swatches title. 

\`\`\`jsx
<Swatches options={options} titleText={"Swatches Title"} />
\`\`\`

### selected
The optional \`selected\` prop specifies the selected option if the selected state is handled outside of the component. 

\`\`\`jsx

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

\`\`\`jsx
<Swatches options={options} breakpoints={customBreakpoints} />
\`\`\`

`,
					d = {
						title: 'Molecules/Swatches',
						component: o.l,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, a.FD)('div', {
										children: [(0, a.Y)(r.oz, { options: { overrides: { code: n.Z } }, children: s }), (0, a.Y)(r.uY, { story: r.h1 })],
									}),
							},
						},
						decorators: [(u) => (0, a.Y)('div', { style: { maxWidth: '300px' }, children: (0, a.Y)(u, {}) })],
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
							...e.F,
						},
					},
					_ = (0, i.PA)(({ args: u }) => (0, a.Y)(o.l, { ...u })),
					f = (u) => (0, a.Y)(_, { args: u }),
					l = (u) => (0, a.Y)(_, { args: u }),
					m = (u) => (0, a.Y)(_, { args: u }),
					b = (u) => (0, a.Y)(_, { args: u }),
					g = (u) => (0, a.Y)(_, { args: u });
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
					(l.args = {
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
					(m.args = {
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
					(g.args = {
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
					(l.parameters = {
						...l.parameters,
						docs: {
							...l.parameters?.docs,
							source: {
								originalSource: `(args: SwatchesProps) => {
  return <ObservableSelection args={args} />;
}`,
								...l.parameters?.docs?.source,
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
					});
				const B = ['Default', 'Grid', 'Disabled', 'GradientBackground', 'Images'];
			},
			'./components/src/components/Atoms/Button/Button.tsx'(v, c, t) {
				'use strict';
				t.d(c, { $: () => j });
				var a = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = t('../../node_modules/classnames/index.js'),
					o = t.n(r),
					n = t('../../node_modules/mobx-react-lite/es/index.js'),
					e = t('./components/src/providers/cache.tsx'),
					s = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					d = t('./components/src/providers/snap.tsx'),
					_ = t('./components/src/providers/treePath.tsx'),
					f = t('./components/src/hooks/useA11y.tsx'),
					l = t('./components/src/utilities/cloneWithProps.tsx'),
					m = t('./components/src/utilities/defined.ts'),
					b = t('./components/src/utilities/mergeProps.ts'),
					g = t('./components/src/utilities/mergeStyles.ts'),
					B = t('./components/src/components/Atoms/Icon/Icon.tsx'),
					u = t('./components/src/hooks/useLang.tsx'),
					Y = t('./components/src/hooks/useComponent.tsx'),
					G = t('../../node_modules/deepmerge/dist/cjs.js'),
					N = t.n(G),
					F = t('../../node_modules/color/index.js'),
					L = t.n(F);
				const w = ({ native: S, color: O, backgroundColor: E, borderColor: I, theme: P }) => {
						const y = new (L())(E || O || P?.variables?.colors?.primary || void 0).lightness(95);
						return S
							? (0, i.AH)({})
							: (0, i.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: O || P?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: E || '#fff',
									border: `1px solid ${I || O || P?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer', backgroundColor: y.hex() || '#f8f8f8' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  });
					},
					j = (0, n.PA)((S) => {
						const O = (0, s.u)(),
							E = (0, d.uk)(),
							P = { disableA11y: !1, treePath: (0, _.LU)() },
							y = (0, b.v6)('button', O, P, S),
							{
								content: x,
								children: D,
								disabled: M,
								native: k,
								onClick: R,
								disableA11y: U,
								disableStyles: V,
								className: W,
								internalClassName: z,
								icon: h,
								lang: A,
								treePath: T,
								customComponent: p,
								style: q,
								styleScript: ee,
								themeStyleScript: te,
								...Z
							} = y;
						if (p) {
							const C = (0, Y.x)(E?.templates?.library.import.component.button || {}, p);
							if (C) return (0, a.Y)(C, { ...y });
						}
						const H = { icon: { internalClassName: 'ss__button__icon', ...(0, m.s)({ disableStyles: V }), theme: y?.theme, treePath: T } },
							$ = {
								...(0, g.Z)(y, w),
								className: o()('ss__button', { 'ss__button--native': k, 'ss__button--disabled': M }, W, z),
								disabled: M,
								onClick: (C) => !M && R && R(C),
								...Z,
							},
							J = { ref: (C) => (0, f.iy)(C) },
							Q = {},
							X = N()(Q, A || {}),
							K = (0, u.u)(X, {});
						return x || D || h || A?.button?.value
							? (0, a.Y)(e._, {
									children: k
										? (0, a.FD)('button', {
												...$,
												children: [
													(0, a.FD)('span', {
														className: 'ss__button__content',
														...K.button?.all,
														children: [(0, l.Y)(x, { treePath: T }), (0, l.Y)(D, { treePath: T })],
													}),
													h && (0, a.Y)(B.I, { ...H.icon, ...(typeof h == 'string' ? { icon: h } : h) }),
												],
										  })
										: (0, a.FD)('div', {
												...(U ? {} : J),
												role: 'button',
												'aria-disabled': M,
												...$,
												...K.button?.attributes,
												children: [
													x || D || K.button?.value
														? (0, a.FD)('span', {
																className: 'ss__button__content',
																...K.button?.value,
																children: [(0, l.Y)(x, { treePath: T }), (0, l.Y)(D, { treePath: T })],
														  })
														: void 0,
													h && (0, a.Y)(B.I, { ...H.icon, ...(typeof h == 'string' ? { icon: h } : h) }),
												],
										  }),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/Image/Image.tsx'(v, c, t) {
				'use strict';
				t.d(c, { _: () => B, t: () => b });
				var a = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					r = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					o = t('../../node_modules/classnames/index.js'),
					n = t.n(o),
					e = t('./components/src/providers/cache.tsx'),
					s = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					d = t('./components/src/providers/snap.tsx'),
					_ = t('./components/src/providers/treePath.tsx'),
					f = t('./components/src/utilities/mergeProps.ts'),
					l = t('./components/src/utilities/mergeStyles.ts'),
					m = t('./components/src/hooks/useComponent.tsx');
				const b = '//cdn.athoscommerce.net/snap/images/fallback.png',
					g = ({ height: u }) =>
						(0, r.AH)({
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							height: u || 'auto',
							'& img': { flexShrink: '0', objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' },
							'&.ss__image--hidden': { '& img': { visibility: 'hidden' } },
						});
				function B(u) {
					const Y = (0, s.u)(),
						G = (0, d.uk)(),
						N = (0, _.LU)(),
						F = { fallback: b, lazy: !0, treePath: N },
						L = (0, f.v6)('image', Y, F, u),
						{
							alt: w,
							src: j,
							fallback: S,
							title: O,
							hoverSrc: E,
							lazy: I,
							onMouseOver: P,
							onMouseOut: y,
							onError: x,
							onLoad: D,
							onClick: M,
							className: k,
							internalClassName: R,
							customComponent: U,
						} = L;
					if (U) {
						const p = (0, m.x)(G?.templates?.library.import.component.image || {}, U);
						if (p) return (0, a.Y)(p, { ...L });
					}
					const [V, W] = (0, i.J0)(!1),
						[z, h] = (0, i.J0)(!1),
						A = (0, i.li)('');
					(0, i.vJ)(() => {
						A.current = j;
					}),
						A.current && A.current != j && W(!1);
					const T = (0, l.Z)(L, g);
					return (0, a.Y)(e._, {
						children: (0, a.Y)('div', {
							...T,
							className: n()('ss__image', { 'ss__image--hidden': !V }, k, R),
							children: (0, a.Y)('img', {
								src: (z ? E : j) || S,
								alt: w,
								title: O || w,
								loading: I ? 'lazy' : void 0,
								onLoad: (p) => {
									W(!0), D && D(p);
								},
								onClick: (p) => M && M(p),
								onError: (p) => {
									(p.target.src = S || ''), x && x(p);
								},
								onMouseOver: (p) => {
									E && h(!0), P && P(p);
								},
								onMouseOut: (p) => {
									E && h(!1), y && y(p);
								},
							}),
						}),
					});
				}
			},
			'./components/src/hooks/useA11y.tsx'(v, c, t) {
				'use strict';
				t.d(c, { DH: () => o, aZ: () => r, iy: () => n });
				const a = 9,
					i = 27,
					r = 'ss-a11y',
					o =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function n(e, s, d, _) {
					const f = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${f}`)) {
						const l = document.createElement('style');
						(l.type = 'text/css'),
							(l.id = f),
							(l.innerHTML = `[${r}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(l);
					}
					e &&
						!e.attributes?.[r] &&
						(e.setAttribute(r, !0),
						e.setAttribute('tabIndex', `${s || 0}`),
						e.addEventListener('keydown', (l) => {
							(l.code === 'Space' || l.code === 'Enter') && e.click();
						}),
						d &&
							e.addEventListener('keydown', function (l) {
								const m = e.querySelectorAll(o),
									b = m[0],
									g = m[m.length - 1];
								if (l.keyCode == i) {
									e.focus(), _ && _(l), l.preventDefault(), l.stopPropagation();
									return;
								}
								(l.key === 'Tab' || l.keyCode === a) &&
									(l.shiftKey
										? document.activeElement === b && (g.focus(), l.preventDefault())
										: document.activeElement === g && (b.focus(), l.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useLang.tsx'(v, c, t) {
				'use strict';
				t.d(c, { u: () => a });
				const a = (i, r) => {
					const o = {};
					return (
						Object.keys(i).forEach((n) => {
							const e = i && i[n],
								s = {};
							e &&
								(e?.value &&
									(typeof e.value == 'function'
										? (s.value = { 'ss-lang': n, dangerouslySetInnerHTML: { __html: e.value(r) } })
										: (s.value = { 'ss-lang': n, dangerouslySetInnerHTML: { __html: e.value } })),
								e?.attributes &&
									Object.keys(e?.attributes).length &&
									((s.attributes = { 'ss-lang': n }),
									e?.attributes?.['aria-label'] &&
										(typeof e.attributes?.['aria-label'] == 'function'
											? (s.attributes['aria-label'] = e.attributes['aria-label'](r))
											: (s.attributes['aria-label'] = e.attributes['aria-label'])),
									e?.attributes?.['aria-valuetext'] &&
										(typeof e.attributes?.['aria-valuetext'] == 'function'
											? (s.attributes['aria-valuetext'] = e.attributes['aria-valuetext'](r))
											: (s.attributes['aria-valuetext'] = e.attributes['aria-valuetext'])),
									e?.attributes?.title &&
										(typeof e.attributes?.title == 'function'
											? (s.attributes.title = e.attributes.title(r))
											: (s.attributes.title = e.attributes.title)),
									e?.attributes?.alt &&
										(typeof e.attributes?.alt == 'function' ? (s.attributes.alt = e.attributes.alt(r)) : (s.attributes.alt = e.attributes.alt)),
									e?.attributes?.placeholder &&
										(typeof e.attributes?.placeholder == 'function'
											? (s.attributes.placeholder = e.attributes.placeholder(r))
											: (s.attributes.placeholder = e.attributes.placeholder))),
								(s.all = { ...s.value, ...s.attributes, 'ss-lang': n })),
								(o[n] = s);
						}),
						o
					);
				};
			},
			'./components/src/utilities/componentArgs.ts'(v, c, t) {
				'use strict';
				t.d(c, { F: () => a });
				const a = {
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
			'./components/src/utilities/defined.ts'(v, c, t) {
				'use strict';
				t.d(c, { s: () => a });
				function a(i) {
					const r = {};
					return (
						Object.keys(i).map((o) => {
							i[o] !== void 0 && (r[o] = i[o]);
						}),
						r
					);
				}
			},
			'./components/src/utilities/storybook.tsx'(v, c, t) {
				'use strict';
				t.d(c, { Z: () => o });
				var a = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const r = 'prism-block',
					o = (n) => {
						const e = (0, i.li)(null);
						return (
							(0, i.vJ)(() => {
								e.current && n.className?.includes('lang-') && !n.className?.includes(r) && window?.Prism?.highlightElement(e.current);
							}, [n.className, n.children, e]),
							(0, a.Y)('code', { ...n, ref: e, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/dequal/dist/index.mjs'(v, c, t) {
				'use strict';
				t.d(c, { j: () => r });
				var a = Object.prototype.hasOwnProperty;
				function i(o, n, e) {
					for (e of o.keys()) if (r(e, n)) return e;
				}
				function r(o, n) {
					var e, s, d;
					if (o === n) return !0;
					if (o && n && (e = o.constructor) === n.constructor) {
						if (e === Date) return o.getTime() === n.getTime();
						if (e === RegExp) return o.toString() === n.toString();
						if (e === Array) {
							if ((s = o.length) === n.length) for (; s-- && r(o[s], n[s]); );
							return s === -1;
						}
						if (e === Set) {
							if (o.size !== n.size) return !1;
							for (s of o) if (((d = s), (d && typeof d == 'object' && ((d = i(n, d)), !d)) || !n.has(d))) return !1;
							return !0;
						}
						if (e === Map) {
							if (o.size !== n.size) return !1;
							for (s of o) if (((d = s[0]), (d && typeof d == 'object' && ((d = i(n, d)), !d)) || !r(s[1], n.get(d)))) return !1;
							return !0;
						}
						if (e === ArrayBuffer) (o = new Uint8Array(o)), (n = new Uint8Array(n));
						else if (e === DataView) {
							if ((s = o.byteLength) === n.byteLength) for (; s-- && o.getInt8(s) === n.getInt8(s); );
							return s === -1;
						}
						if (ArrayBuffer.isView(o)) {
							if ((s = o.byteLength) === n.byteLength) for (; s-- && o[s] === n[s]; );
							return s === -1;
						}
						if (!e || typeof o == 'object') {
							s = 0;
							for (e in o) if ((a.call(o, e) && ++s && !a.call(n, e)) || !(e in n) || !r(o[e], n[e])) return !1;
							return Object.keys(n).length === s;
						}
					}
					return o !== o && n !== n;
				}
			},
			'../../node_modules/memoizerific sync recursive'(v) {
				function c(t) {
					var a = new Error("Cannot find module '" + t + "'");
					throw ((a.code = 'MODULE_NOT_FOUND'), a);
				}
				(c.keys = () => []), (c.resolve = c), (c.id = '../../node_modules/memoizerific sync recursive'), (v.exports = c);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-Swatches-Swatches-stories.81faf2c2.iframe.bundle.js.map
