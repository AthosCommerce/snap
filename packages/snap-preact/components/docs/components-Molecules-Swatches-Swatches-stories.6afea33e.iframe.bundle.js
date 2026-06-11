(() => {
	(self.webpackChunk_athoscommerce_snap_preact = self.webpackChunk_athoscommerce_snap_preact || []).push([
		[7861],
		{
			'../../node_modules/@athoscommerce/snap-toolbox/dist/esm/filters/handleize.js'(_, d, t) {
				'use strict';
				t.d(d, { p: () => o });
				function o(l) {
					if (typeof l != 'string') return l;
					let r = l.toLowerCase();
					return (r = r.replace(/[^\w\s]/g, '').trim()), (r = r.replace(/\s/g, '-')), r;
				}
			},
			'./components/src/components/Molecules/Swatches/Swatches.stories.tsx'(_, d, t) {
				'use strict';
				t.r(d),
					t.d(d, {
						Default: () => u,
						Disabled: () => b,
						GradientBackground: () => g,
						Grid: () => i,
						Images: () => m,
						__namedExportsOrder: () => v,
						default: () => c,
					});
				var o = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = t('../../node_modules/mobx-react-lite/es/index.js'),
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
					c = {
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
							...e.F,
						},
					},
					f = (0, l.PA)(({ args: p }) => (0, o.Y)(n.l, { ...p })),
					u = (p) => (0, o.Y)(f, { args: p }),
					i = (p) => (0, o.Y)(f, { args: p }),
					b = (p) => (0, o.Y)(f, { args: p }),
					g = (p) => (0, o.Y)(f, { args: p }),
					m = (p) => (0, o.Y)(f, { args: p });
				(u.args = {
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
					(i.args = {
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
					(b.args = {
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
					(g.args = {
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
					(u.parameters = {
						...u.parameters,
						docs: {
							...u.parameters?.docs,
							source: {
								originalSource: `(args: SwatchesProps) => {
  return <ObservableSelection args={args} />;
}`,
								...u.parameters?.docs?.source,
							},
						},
					}),
					(i.parameters = {
						...i.parameters,
						docs: {
							...i.parameters?.docs,
							source: {
								originalSource: `(args: SwatchesProps) => {
  return <ObservableSelection args={args} />;
}`,
								...i.parameters?.docs?.source,
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
				const v = ['Default', 'Grid', 'Disabled', 'GradientBackground', 'Images'];
			},
			'./components/src/components/Atoms/Button/Button.tsx'(_, d, t) {
				'use strict';
				t.d(d, { $: () => C });
				var o = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					r = t('../../node_modules/classnames/index.js'),
					n = t.n(r),
					a = t('../../node_modules/mobx-react-lite/es/index.js'),
					e = t('./components/src/providers/cache.tsx'),
					s = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					c = t('./components/src/providers/treePath.tsx'),
					f = t('./components/src/hooks/useA11y.tsx'),
					u = t('./components/src/utilities/cloneWithProps.tsx'),
					i = t('./components/src/utilities/defined.ts'),
					b = t('./components/src/utilities/mergeProps.ts'),
					g = t('./components/src/utilities/mergeStyles.ts'),
					m = t('./components/src/components/Atoms/Icon/Icon.tsx'),
					v = t('./components/src/hooks/useLang.tsx'),
					p = t('./components/src/hooks/useCustomComponentOverride.tsx'),
					T = t('../../node_modules/deepmerge/dist/cjs.js'),
					U = t.n(T);
				const B = ({ native: P, color: O, backgroundColor: I, borderColor: w, theme: E }) =>
						P
							? (0, l.AH)({})
							: (0, l.AH)({
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px',
									padding: '5px 10px',
									position: 'relative',
									color: O || E?.variables?.colors?.primary,
									outline: 0,
									backgroundColor: I || '#fff',
									border: `1px solid ${w || O || E?.variables?.colors?.primary || '#333'}`,
									'&:not(.ss__button--disabled):hover': { cursor: 'pointer' },
									'&.ss__button--disabled': { opacity: 0.7, '&:hover': { cursor: 'default' } },
									'.ss__button__content': { width: '100%' },
									label: { cursor: 'pointer' },
							  }),
					C = (0, a.PA)((P) => {
						const O = (0, s.u)(),
							w = { disableA11y: !1, treePath: (0, c.LU)() },
							E = (0, b.v6)('button', O, w, P),
							{
								content: k,
								children: x,
								disabled: D,
								native: S,
								onClick: L,
								disableA11y: W,
								disableStyles: K,
								className: G,
								internalClassName: Y,
								icon: y,
								lang: A,
								treePath: M,
								style: N,
								styleScript: j,
								themeStyleScript: V,
								...h
							} = E,
							{ overrideElement: $, shouldRenderDefault: Z } = (0, p._)('button', E);
						if (!Z) return $;
						const z = { icon: { internalClassName: 'ss__button__icon', ...(0, i.s)({ disableStyles: K }), theme: E?.theme, treePath: M } },
							H = {
								...(0, g.Z)(E, B),
								className: n()('ss__button', { 'ss__button--native': S, 'ss__button--disabled': D }, G, Y),
								disabled: D,
								onClick: (F) => !D && L && L(F),
								...h,
							},
							J = { ref: (F) => (0, f.iy)(F) },
							X = {},
							Q = U()(X, A || {}),
							R = (0, v.u)(Q, {}),
							q = !!h.dangerouslySetInnerHTML;
						return k || x || y || A?.button?.value || q
							? (0, o.Y)(e._, {
									children: S
										? (0, o.FD)('button', {
												...H,
												children: [
													(0, o.FD)('span', {
														className: 'ss__button__content',
														...R.button?.all,
														children: [(0, u.Y)(k, { treePath: M }), (0, u.Y)(x, { treePath: M })],
													}),
													y && (0, o.Y)(m.I, { ...z.icon, ...(typeof y == 'string' ? { icon: y } : y) }),
												],
										  })
										: (0, o.FD)('div', {
												...(W ? {} : J),
												role: 'button',
												'aria-disabled': D,
												...H,
												...R.button?.attributes,
												children: [
													k || x || R.button?.value
														? (0, o.FD)('span', {
																className: 'ss__button__content',
																...R.button?.value,
																children: [(0, u.Y)(k, { treePath: M }), (0, u.Y)(x, { treePath: M })],
														  })
														: void 0,
													y && (0, o.Y)(m.I, { ...z.icon, ...(typeof y == 'string' ? { icon: y } : y) }),
												],
										  }),
							  })
							: null;
					});
			},
			'./components/src/components/Atoms/Image/Image.tsx'(_, d, t) {
				'use strict';
				t.d(d, { _: () => m, t: () => b });
				var o = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = t('../../node_modules/preact/hooks/dist/hooks.module.js'),
					r = t('../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js'),
					n = t('../../node_modules/classnames/index.js'),
					a = t.n(n),
					e = t('./components/src/providers/cache.tsx'),
					s = t('../../node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js'),
					c = t('./components/src/providers/treePath.tsx'),
					f = t('./components/src/utilities/mergeProps.ts'),
					u = t('./components/src/utilities/mergeStyles.ts'),
					i = t('./components/src/hooks/useCustomComponentOverride.tsx');
				const b = '//cdn.athoscommerce.net/snap/images/fallback.png',
					g = ({ height: v }) =>
						(0, r.AH)({
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							height: v || 'auto',
							'& img': { flexShrink: '0', objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' },
							'&.ss__image--hidden': { '& img': { visibility: 'hidden' } },
						});
				function m(v) {
					const p = (0, s.u)(),
						T = (0, c.LU)(),
						U = { fallback: b, lazy: !0, treePath: T },
						B = (0, f.v6)('image', p, U, v),
						{
							alt: C,
							src: P,
							fallback: O,
							title: I,
							hoverSrc: w,
							lazy: E,
							onMouseOver: k,
							onMouseOut: x,
							onError: D,
							onLoad: S,
							onClick: L,
							className: W,
							internalClassName: K,
						} = B,
						{ overrideElement: G, shouldRenderDefault: Y } = (0, i._)('image', B);
					if (!Y) return G;
					const [y, A] = (0, l.J0)(!1),
						[M, N] = (0, l.J0)(!1),
						j = (0, l.li)('');
					(0, l.vJ)(() => {
						j.current = P;
					}),
						j.current && j.current != P && A(!1);
					const V = (0, u.Z)(B, g);
					return (0, o.Y)(e._, {
						children: (0, o.Y)('div', {
							...V,
							className: a()('ss__image', { 'ss__image--hidden': !y }, W, K),
							children: (0, o.Y)('img', {
								src: (M ? w : P) || O,
								alt: C,
								title: I || C,
								loading: E ? 'lazy' : void 0,
								onLoad: (h) => {
									A(!0), S && S(h);
								},
								onClick: (h) => L && L(h),
								onError: (h) => {
									(h.target.src = O || ''), D && D(h);
								},
								onMouseOver: (h) => {
									w && N(!0), k && k(h);
								},
								onMouseOut: (h) => {
									w && N(!1), x && x(h);
								},
							}),
						}),
					});
				}
			},
			'./components/src/hooks/useA11y.tsx'(_, d, t) {
				'use strict';
				t.d(d, { DH: () => n, aZ: () => r, iy: () => a });
				const o = 9,
					l = 27,
					r = 'ss-a11y',
					n =
						'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]';
				function a(e, s, c, f) {
					const u = 'ssA11yFocusStyle';
					if (!document.querySelector(`#${u}`)) {
						const i = document.createElement('style');
						(i.type = 'text/css'),
							(i.id = u),
							(i.innerHTML = `[${r}]:focus-visible { outline: -webkit-focus-ring-color auto 1px !important; }`),
							document.getElementsByTagName('head')[0].appendChild(i);
					}
					e &&
						!e.attributes?.[r] &&
						(e.setAttribute(r, !0),
						e.setAttribute('tabIndex', `${s || 0}`),
						e.addEventListener('keydown', (i) => {
							(i.code === 'Space' || i.code === 'Enter') && e.click();
						}),
						c &&
							e.addEventListener('keydown', function (i) {
								const b = e.querySelectorAll(n),
									g = b[0],
									m = b[b.length - 1];
								if (i.keyCode == l) {
									e.focus(), f && f(i), i.preventDefault(), i.stopPropagation();
									return;
								}
								(i.key === 'Tab' || i.keyCode === o) &&
									(i.shiftKey
										? document.activeElement === g && (m.focus(), i.preventDefault())
										: document.activeElement === m && (g.focus(), i.preventDefault()));
							}));
				}
			},
			'./components/src/hooks/useLang.tsx'(_, d, t) {
				'use strict';
				t.d(d, { u: () => o });
				const o = (l, r) => {
					const n = {};
					return (
						Object.keys(l).forEach((a) => {
							const e = l && l[a],
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
			'./components/src/utilities/componentArgs.ts'(_, d, t) {
				'use strict';
				t.d(d, { F: () => o });
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
			'./components/src/utilities/defined.ts'(_, d, t) {
				'use strict';
				t.d(d, { s: () => o });
				function o(l) {
					const r = {};
					return (
						Object.keys(l).map((n) => {
							l[n] !== void 0 && (r[n] = l[n]);
						}),
						r
					);
				}
			},
			'./components/src/utilities/storybook.tsx'(_, d, t) {
				'use strict';
				t.d(d, { Z: () => n });
				var o = t('../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js'),
					l = t('../../node_modules/preact/hooks/dist/hooks.module.js');
				const r = 'prism-block',
					n = (a) => {
						const e = (0, l.li)(null);
						return (
							(0, l.vJ)(() => {
								e.current && a.className?.includes('lang-') && !a.className?.includes(r) && window?.Prism?.highlightElement(e.current);
							}, [a.className, a.children, e]),
							(0, o.Y)('code', { ...a, ref: e, 'data-prismjs-copy': 'Copy' })
						);
					};
			},
			'../../node_modules/colord/plugins/names.mjs'(_, d, t) {
				'use strict';
				t.d(d, { A: () => o }), Object.defineProperty(o, 'name', { value: 'default', configurable: !0 });
				function o(l, r) {
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
					(l.prototype.toName = function (c) {
						if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
						var f,
							u,
							i = a[this.toHex()];
						if (i) return i;
						if (c?.closest) {
							var b = this.toRgb(),
								g = 1 / 0,
								m = 'black';
							if (!s.length) for (var v in n) s[v] = new l(n[v]).toRgb();
							for (var p in n) {
								var T = ((f = b), (u = s[p]), Math.pow(f.r - u.r, 2) + Math.pow(f.g - u.g, 2) + Math.pow(f.b - u.b, 2));
								T < g && ((g = T), (m = p));
							}
							return m;
						}
					}),
						r.string.push([
							function (c) {
								var f = c.toLowerCase(),
									u = f === 'transparent' ? '#0000' : n[f];
								return u ? new l(u).toRgb() : null;
							},
							'name',
						]);
				}
			},
			'../../node_modules/dequal/dist/index.mjs'(_, d, t) {
				'use strict';
				t.d(d, { j: () => r });
				var o = Object.prototype.hasOwnProperty;
				function l(n, a, e) {
					for (e of n.keys()) if (r(e, a)) return e;
				}
				function r(n, a) {
					var e, s, c;
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
							for (s of n) if (((c = s), (c && typeof c == 'object' && ((c = l(a, c)), !c)) || !a.has(c))) return !1;
							return !0;
						}
						if (e === Map) {
							if (n.size !== a.size) return !1;
							for (s of n) if (((c = s[0]), (c && typeof c == 'object' && ((c = l(a, c)), !c)) || !r(s[1], a.get(c)))) return !1;
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
				function d(t) {
					var o = new Error("Cannot find module '" + t + "'");
					throw ((o.code = 'MODULE_NOT_FOUND'), o);
				}
				(d.keys = () => []), (d.resolve = d), (d.id = '../../node_modules/memoizerific sync recursive'), (_.exports = d);
			},
		},
	]);
})();

//# sourceMappingURL=components-Molecules-Swatches-Swatches-stories.6afea33e.iframe.bundle.js.map
