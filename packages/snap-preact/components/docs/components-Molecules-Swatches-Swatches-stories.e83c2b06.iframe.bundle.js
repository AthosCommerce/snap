(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[7861],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(_, c, t) {
				'use strict';
				t.d(c, { p: () => o });
				function o(i) {
					if (typeof i != 'string') return i;
					let r = i.toLowerCase();
					return (r = r.replace(/[^\w\s]/g, '').trim()), (r = r.replace(/\s/g, '-')), r;
				}
			},
			'./components/src/components/Molecules/Swatches/Swatches.stories.tsx'(_, c, t) {
				'use strict';
				t.r(c),
					t.d(c, {
						Default: () => f,
						Disabled: () => m,
						GradientBackground: () => b,
						Grid: () => l,
						Images: () => g,
						__namedExportsOrder: () => y,
						default: () => d,
					});
				var o = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = t('../../node_modules/mobx-react-lite/es/index.js'),
					r = t('../../node_modules/@storybook/blocks/dist/index.mjs'),
					n = t('./components/src/components/Molecules/Swatches/Swatches.tsx'),
					a = t('./components/src/utilities/storybook.tsx'),
					e = t('./components/src/utilities/componentArgs.ts');
				const s = `# Swatches

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
					d = {
						title: 'Molecules/Swatches',
						component: n.l,
						tags: ['autodocs'],
						parameters: {
							docs: {
								page: () =>
									(0, o.FD)('div', {
										children: [(0, o.Y)(r.oz, { options: { overrides: { code: a.Z } }, children: s }), (0, o.Y)(r.uY, { story: r.h1 })],
									}),
							},
						},
						decorators: [(u) => (0, o.Y)('div', { style: { maxWidth: '300px' }, children: (0, o.Y)(u, {}) })],
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
					p = (0, i.PA)(({ args: u }) => (0, o.Y)(n.l, { ...u })),
					f = (u) => (0, o.Y)(p, { args: u }),
					l = (u) => (0, o.Y)(p, { args: u }),
					m = (u) => (0, o.Y)(p, { args: u }),
					b = (u) => (0, o.Y)(p, { args: u }),
					g = (u) => (0, o.Y)(p, { args: u });
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
				const y = ['Default', 'Grid', 'Disabled', 'GradientBackground', 'Images'];
			},
			'./components/src/components/Atoms/Button/Button.tsx'(_, c, t) {
				'use strict';
				t.d(c, { $: () => L });
				var o = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = t('../../node_modules/classnames/index.js'),
					n = t.n(r),
					a = t('../../node_modules/mobx-react-lite/es/index.js'),
					e = t('./components/src/providers/cache.tsx'),
					s = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					d = t('./components/src/providers/snap.tsx'),
					p = t('./components/src/providers/treePath.tsx'),
					f = t('./components/src/hooks/useA11y.tsx'),
					l = t('./components/src/utilities/cloneWithProps.tsx'),
					m = t('./components/src/utilities/defined.ts'),
					b = t('./components/src/utilities/mergeProps.ts'),
					g = t('./components/src/utilities/mergeStyles.ts'),
					y = t('./components/src/components/Atoms/Icon/Icon.tsx'),
					u = t('./components/src/hooks/useLang.tsx'),
					D = t('./components/src/hooks/useComponent.tsx'),
					K = t('../../node_modules/deepmerge/dist/cjs.js'),
					Y = t.n(K);
				const G = ({ native: M, color: E, backgroundColor: T, borderColor: j, theme: P }) =>
						M
							? (0, i.AH)({})
							: (0, i.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: E || P?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: T || '#fff',
									border: `1px solid ${j || E || P?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  }),
					L = (0, a.PA)((M) => {
						const E = (0, s.u)(),
							T = (0, d.uk)(),
							P = { disableA11y: !1, treePath: (0, p.LU)() },
							B = (0, b.v6)('button', E, P, M),
							{
								content: w,
								children: k,
								disabled: x,
								native: C,
								onClick: I,
								disableA11y: N,
								disableStyles: F,
								className: R,
								internalClassName: V,
								icon: v,
								lang: U,
								treePath: O,
								customComponent: S,
								style: z,
								styleScript: h,
								themeStyleScript: q,
								...Z
							} = B;
						if (S) {
							const A = (0, D.x)(T?.templates?.library.import.component.button || {}, S);
							if (A) return (0, o.Y)(A, { ...B });
						}
						const H = { icon: { internalClassName: 'ss__button__icon', ...(0, m.s)({ disableStyles: F }), theme: B?.theme, treePath: O } },
							$ = {
								...(0, g.Z)(B, G),
								className: n()('ss__button', { 'ss__button--native': C, 'ss__button--disabled': x }, R, V),
								disabled: x,
								onClick: (A) => !x && I && I(A),
								...Z,
							},
							J = { ref: (A) => (0, f.iy)(A) },
							X = {},
							Q = Y()(X, U || {}),
							W = (0, u.u)(Q, {});
						return w || k || v || U?.button?.value
							? (0, o.Y)(e._, {
									children: C
										? (0, o.FD)('button', {
												...$,
												children: [
													(0, o.FD)('span', {
														className: 'ss__button__content',
														...W.button?.all,
														children: [(0, l.Y)(w, { treePath: O }), (0, l.Y)(k, { treePath: O })],
													}),
													v && (0, o.Y)(y.I, { ...H.icon, ...(typeof v == 'string' ? { icon: v } : v) }),
												],
										  })
										: (0, o.FD)('div', {
												...(N ? {} : J),
												role: 'button',
												'aria-disabled': x,
												...$,
												...W.button?.attributes,
												children: [
													w || k || W.button?.value
														? (0, o.FD)('span', {
																className: 'ss__button__content',
																...W.button?.value,
																children: [(0, l.Y)(w, { treePath: O }), (0, l.Y)(k, { treePath: O })],
														  })
														: void 0,
													v && (0, o.Y)(y.I, { ...H.icon, ...(typeof v == 'string' ? { icon: v } : v) }),
												],
										  }),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/Image/Image.tsx'(_, c, t) {
				'use strict';
				t.d(c, { _: () => y, t: () => b });
				var o = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					r = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = t('../../node_modules/classnames/index.js'),
					a = t.n(n),
					e = t('./components/src/providers/cache.tsx'),
					s = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					d = t('./components/src/providers/snap.tsx'),
					p = t('./components/src/providers/treePath.tsx'),
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
				function y(u) {
					const D = (0, s.u)(),
						K = (0, d.uk)(),
						Y = (0, p.LU)(),
						G = { fallback: b, lazy: !0, treePath: Y },
						L = (0, f.v6)('image', D, G, u),
						{
							alt: M,
							src: E,
							fallback: T,
							title: j,
							hoverSrc: P,
							lazy: B,
							onMouseOver: w,
							onMouseOut: k,
							onError: x,
							onLoad: C,
							onClick: I,
							className: N,
							internalClassName: F,
							customComponent: R,
						} = L;
					if (R) {
						const h = (0, m.x)(K?.templates?.library.import.component.image || {}, R);
						if (h) return (0, o.Y)(h, { ...L });
					}
					const [V, v] = (0, i.J0)(!1),
						[U, O] = (0, i.J0)(!1),
						S = (0, i.li)('');
					(0, i.vJ)(() => {
						S.current = E;
					}),
						S.current && S.current != E && v(!1);
					const z = (0, l.Z)(L, g);
					return (0, o.Y)(e._, {
						children: (0, o.Y)('div', {
							...z,
							className: a()('ss__image', { 'ss__image--hidden': !V }, N, F),
							children: (0, o.Y)('img', {
								src: (U ? P : E) || T,
								alt: M,
								title: j || M,
								loading: B ? 'lazy' : void 0,
								onLoad: (h) => {
									v(!0), C && C(h);
								},
								onClick: (h) => I && I(h),
								onError: (h) => {
									(h.target.src = T || ''), x && x(h);
								},
								onMouseOver: (h) => {
									P && O(!0), w && w(h);
								},
								onMouseOut: (h) => {
									P && O(!1), k && k(h);
								},
							}),
						}),
					});
				}
			},
			'./components/src/hooks/useA11y.tsx'(_, c, t) {
				'use strict';
				t.d(c, { DH: () => n, aZ: () => r, iy: () => a });
				const o = 9,
					i = 27,
					r = 'ss-a11y',
					n =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function a(e, s, d, p) {
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
								const m = e.querySelectorAll(n),
									b = m[0],
									g = m[m.length - 1];
								if (l.keyCode == i) {
									e.focus(), p && p(l), l.preventDefault(), l.stopPropagation();
									return;
								}
								(l.key === 'Tab' || l.keyCode === o) &&
									(l.shiftKey
										? document.activeElement === b && (g.focus(), l.preventDefault())
										: document.activeElement === g && (b.focus(), l.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useLang.tsx'(_, c, t) {
				'use strict';
				t.d(c, { u: () => o });
				const o = (i, r) => {
					const n = {};
					return (
						Object.keys(i).forEach((a) => {
							const e = i && i[a],
								s = {};
							e &&
								(e?.value &&
									(typeof e.value == 'function'
										? (s.value = { 'ss-lang': a, dangerouslySetInnerHTML: { __html: e.value(r) } })
										: (s.value = { 'ss-lang': a, dangerouslySetInnerHTML: { __html: e.value } })),
								e?.attributes &&
									Object.keys(e?.attributes).length &&
									((s.attributes = { 'ss-lang': a }),
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
								(s.all = { ...s.value, ...s.attributes, 'ss-lang': a })),
								(n[a] = s);
						}),
						n
					);
				};
			},
			'./components/src/utilities/componentArgs.ts'(_, c, t) {
				'use strict';
				t.d(c, { F: () => o });
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
			'./components/src/utilities/defined.ts'(_, c, t) {
				'use strict';
				t.d(c, { s: () => o });
				function o(i) {
					const r = {};
					return (
						Object.keys(i).map((n) => {
							i[n] !== void 0 && (r[n] = i[n]);
						}),
						r
					);
				}
			},
			'./components/src/utilities/storybook.tsx'(_, c, t) {
				'use strict';
				t.d(c, { Z: () => n });
				var o = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					i = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const r = 'prism-block',
					n = (a) => {
						const e = (0, i.li)(null);
						return (
							(0, i.vJ)(() => {
								e.current && a.className?.includes('lang-') && !a.className?.includes(r) && window?.Prism?.highlightElement(e.current);
							}, [a.className, a.children, e]),
							(0, o.Y)('code', { ...a, ref: e, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/colord/plugins/names.mjs'(_, c, t) {
				'use strict';
				t.d(c, { A: () => o }), Object.defineProperty(o, 'name', { value: 'default', configurable: !0 });
				function o(i, r) {
					var n = {
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
						a = {};
					for (var e in n) a[n[e]] = e;
					var s = {};
					(i.prototype.toName = function (d) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var p,
							f,
							l = a[this.toHex()];
						if (l) return l;
						if (d?.closest) {
							var m = this.toRgb(),
								b = 1 / 0,
								g = 'black';
							if (!s.length) for (var y in n) s[y] = new i(n[y]).toRgb();
							for (var u in n) {
								var D = ((p = m), (f = s[u]), Math.pow(p.r - f.r, 2) + Math.pow(p.g - f.g, 2) + Math.pow(p.b - f.b, 2));
								D < b && ((b = D), (g = u));
							}
							return g;
						}
					}),
						r.string.push([
							function (d) {
								var p = d.toLowerCase(),
									f = p === 'transparent' ? '#0000' : n[p];
								return f ? new i(f).toRgb() : null;
							},
							'name',
						]);
				}
			},
			'../../node_modules/dequal/dist/index.mjs'(_, c, t) {
				'use strict';
				t.d(c, { j: () => r });
				var o = Object.prototype.hasOwnProperty;
				function i(n, a, e) {
					for (e of n.keys()) if (r(e, a)) return e;
				}
				function r(n, a) {
					var e, s, d;
					if (n === a) return !0;
					if (n && a && (e = n.constructor) === a.constructor) {
						if (e === Date) return n.getTime() === a.getTime();
						if (e === RegExp) return n.toString() === a.toString();
						if (e === Array) {
							if ((s = n.length) === a.length) for (; s-- && r(n[s], a[s]); );
							return s === -1;
						}
						if (e === Set) {
							if (n.size !== a.size) return !1;
							for (s of n) if (((d = s), (d && typeof d == 'object' && ((d = i(a, d)), !d)) || !a.has(d))) return !1;
							return !0;
						}
						if (e === Map) {
							if (n.size !== a.size) return !1;
							for (s of n) if (((d = s[0]), (d && typeof d == 'object' && ((d = i(a, d)), !d)) || !r(s[1], a.get(d)))) return !1;
							return !0;
						}
						if (e === ArrayBuffer) (n = new Uint8Array(n)), (a = new Uint8Array(a));
						else if (e === DataView) {
							if ((s = n.byteLength) === a.byteLength) for (; s-- && n.getInt8(s) === a.getInt8(s); );
							return s === -1;
						}
						if (ArrayBuffer.isView(n)) {
							if ((s = n.byteLength) === a.byteLength) for (; s-- && n[s] === a[s]; );
							return s === -1;
						}
						if (!e || typeof n == 'object') {
							s = 0;
							for (e in n) if ((o.call(n, e) && ++s && !o.call(a, e)) || !(e in a) || !r(n[e], a[e])) return !1;
							return Object.keys(a).length === s;
						}
					}
					return n !== n && a !== a;
				}
			},
			'../../node_modules/memoizerific sync recursive'(_) {
				function c(t) {
					var o = new Error("Cannot find module '" + t + "'");
					throw ((o.code = 'MODULE_NOT_FOUND'), o);
				}
				(c.keys = () => []), (c.resolve = c), (c.id = '../../node_modules/memoizerific sync recursive'), (_.exports = c);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-Swatches-Swatches-stories.e83c2b06.iframe.bundle.js.map
