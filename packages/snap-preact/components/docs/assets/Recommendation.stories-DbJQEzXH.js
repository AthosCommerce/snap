import { j as r } from './iframe-CBMP6iq3.js';
import { Recommendation as a } from './Recommendation-BxmtXX0Y.js';
import { S as l } from './snapify-CNA1I2DS.js';
import { c as i } from './componentArgs-DfBuq-N1.js';
import './preload-helper-PPVm8Dsz.js';
import './useDisplaySettings-DCCuBpZP.js';
import './Carousel-CTiSXyXD.js';
import './defined-CdKp_MB-.js';
import './useIntersection-1a9oca-F.js';
import './useLang-Dx66cFD0.js';
import './RecommendationProfileTracker-BWihLUwH.js';
import './ResultTracker-CBy-MeUe.js';
import './createImpressionObserver-BETervzW.js';
import './Result-C3mmRPuX.js';
import './types-DqusP3LW.js';
import './OverlayBadge-ByZlAQ-V.js';
import './defaultBadgeComponentMap-ByRaqHv1.js';
import './BadgeImage-qABHGrVa.js';
import './BadgeRectangle-D-DJ5cYF.js';
import './BadgePill-DZ4Tt_po.js';
import './BadgeText-DWl6wYDE.js';
import './Image-DCYn0aso.js';
import './Button-CDadhUc9.js';
import './useA11y-BuGQuOJb.js';
import './CalloutBadge-DoxQ9c-v.js';
import './fieldNameToComponentName-CjebIDZG.js';
import './Rating-Bwb5vRVd.js';
import './Price-b0F4x_FF.js';
import './formatNumber-C6zKvI-v.js';
import './VariantSelection-BxzFXcsF.js';
import './Swatches-ik7K4L0U.js';
import './names-EhrrLUyQ.js';
import './Slideshow-DT_s099s.js';
import './Grid-BA6Sqccj.js';
import './selectionKey-CmN2KTR5.js';
import './handleize-xLHhB8k5.js';
import './List-Bltyzt-T.js';
import './Checkbox-Bf1jD8rh.js';
import './Dropdown-DmIQwaKA.js';
import './useClickOutside-CYgcb6yY.js';
import './truncate-CqAvmyZI.js';
import './RecommendationController-DcdNSeJF.js';
import './AutocompleteController-3_eY9TEV.js';
const p = `# Recommendation

Renders a carousel of product recommendations, built using the Carousel Component.

If using children, the provided children elements array length and order must match the results stored in the \`controller.store.results\` (or \`results\` prop) to avoid unexpected tracking behaviour.

Any modification to the results array and data are recommended to be made using an \`afterSearch\` and/or \`afterStore\` event via the Controller instead of making modifications in the component.


## Sub-components
- Carousel
- ResultTracker
- Result (default)

## Usage
\`\`\`tsx
import { Recommendation } from '@athoscommerce/snap-preact/components';
\`\`\`

Additional <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/react#swiper-props">Swiper Component Props</a> can be specified, but may need to be camelCased where appropriate.
Additional <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/swiper-api#modules">Swiper Modules</a> can be provided via the \`modules\` prop; these may need additional props and or stylesheets.

### controller
The required \`controller\` prop specifies a reference to the RecommendationController

\`\`\`tsx
<Recommendation controller={controller} />
\`\`\`
### loop
The \`loop\` prop enables 'infinite' looping through the result set when swiping or using the arrow buttons.

\`\`\`tsx
<Recommendation controller={controller} loop={true} />
\`\`\`

### results
The \`results\` prop specifies a reference to the results store array to use instead of the default \`controller.store.results\`

If using children, the provided children elements array length and order must match the results stored in the \`results\` prop to avoid unexpected tracking behaviour.

\`\`\`tsx
<Recommendation controller={controller} results={controller.store.results} />
\`\`\`

### resultComponent
The \`resultComponent\` prop specifies a custom result component to render.

\`\`\`tsx

const CustomResult = ({
	controller 
	result
}) => {
	return <div>{result.mappings.core?.name}</div>
}

<Recommendation controller={controller} resultComponent={CustomResult} />
\`\`\`

### title
The \`title\` prop specifies the carousel title

\`\`\`tsx
<Recommendation controller={controller} title={'Recommended Products'} />
\`\`\`

### hideTitle
The \`hideTitle\` prop hides the carousel title

\`\`\`tsx
<Recommendation controller={controller} title={'Recommended Products'} hideTitle={true} />
\`\`\`

### description
The \`description\` prop specifies the carousel description

\`\`\`tsx
<Recommendation controller={controller} description={'Recommended Products are so awesome!'} />
\`\`\`

### pagination
The \`pagination\` prop specifies if the carousel should display pagination dots. 

\`\`\`tsx
<Recommendation controller={controller} pagination={true} />
\`\`\`

### vertical
The \`vertical\` prop sets the carousel scroll direction to vertical.

\`\`\`tsx
<Recommendation vertical={true}>{children}<Recommendation/>
\`\`\`

### scrollbar
The \`scrollbar\` prop specifies if the carousel should display a scrollbar.

\`\`\`tsx
<Recommendation controller={controller} scrollbar={true} />
\`\`\`

### slidesPerView
The \`slidesPerView\` prop specifies the number of results to display per page. Values from \`breakpoints\` override it when breakpoints are in use.

\`\`\`tsx
<Recommendation controller={controller} slidesPerView={3} />
\`\`\`

### hideButtons
The \`hideButtons\` prop specifies if the carousel should hide prev/next buttons.

\`\`\`tsx
<Recommendation hideButtons={true}>{children}<Recommendation/>
\`\`\`

### prevButton
The \`prevButton\` prop specifies the previous button element of the carousel. This can be a string or JSX element. 

\`\`\`tsx
<Recommendation controller={controller} prevButton={'<'} />
\`\`\`

### nextButton
The \`nextButton\` prop specifies the next button element of the carousel. This can be a string or JSX element. 

\`\`\`tsx
<Recommendation controller={controller} nextButton={'>'} />
\`\`\`

### modules
The \`modules\` prop accepts additional <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/swiper-api#modules">Swiper Modules</a> - these may need additional props and or stylesheets to function. We include \`Navigation\`, \`Pagination\`, \`Scrollbar\` and \`A11y\` modules by default.

\`\`\`tsx
import { Scrollbar } from 'swiper';
<Recommendation controller={controller} modules={[Scrollbar]} scrollbar={true} />
\`\`\`

### lazyRender 
The \`lazyRender\` prop specifies an object of lazy rendering settings. The settings include an \`enabled\` toggle (defaults to \`true\`) as well as an \`offset\` (default \`"10%"\`) to specify at what distance the component should start rendering relative to the bottom of the viewport.

\`\`\`tsx
const customLazyRenderProps = {
	enabled: true,
	offset: "20px" // any css margin values accepted - px, %, etc...
}

<Recommendation controller={controller} lazyRender={ customLazyRenderProps } />
\`\`\`

### breakpoints
An object that modifies the responsive behavior of the carousel at various viewports. 

The object key specified the viewport for when the parameters will be applied. 

The default configuration contains the following properties, however **\`any Recommendation props\`**, or <a target="_blank" rel="noopener noreferrer" href="https://swiperjs.com/react#swiper-props">Swiper API parameters</a> can also be specified. 

\`slidesPerView\` - number of products to display per page (for a peekaboo effect use a decimal number here)

\`slidesPerGroup\` - number of products to scroll by when next/previous button is clicked

\`spaceBetween\` - spacing between each product

\`\`\`js
const defaultRecommendationBreakpoints = {
	0: {
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween: 0,
	},
	480: {
		slidesPerView: 2,
		slidesPerGroup: 2,
		spaceBetween: 10,
	},
	768: {
		slidesPerView: 3,
		slidesPerGroup: 3,
		spaceBetween: 10,
	},
	1024: {
		slidesPerView: 4,
		slidesPerGroup: 4,
		spaceBetween: 10,
	},
	1200: {
		slidesPerView: 5,
		slidesPerGroup: 5,
		spaceBetween: 10,
	},
};

const defaultVerticalRecommendationBreakpoints = {
	0: {
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween: 0,
	},
};
\`\`\`

\`\`\`tsx
<Recommendation controller={controller} breakpoints={defaultRecommendationBreakpoints} />
\`\`\`

## Lang

The \`lang\` prop allows you to override translatable text strings used by the Recommendation component. All lang entries support a \`value\` (static string or function) and \`attributes\` (e.g. \`aria-label\`).

| Lang Key | Description | Data Provided |
|---|---|---|
| \`titleText\` | Recommendation carousel title | \`controller\` (RecommendationController) |

### Example

\`\`\`tsx
<Recommendation
	controller={controller}
	lang={{
		titleText: {
			value: 'You May Also Like',
		},
	}}
/>
\`\`\`
`,
	$ = {
		title: 'Templates/Recommendation',
		component: a,
		parameters: { docs: { description: { component: p } } },
		decorators: [(e) => r('div', { style: { maxWidth: '1200px' }, children: r(e, {}) })],
		argTypes: {
			controller: { description: 'Controller reference', type: { required: !0 }, table: { type: { summary: 'Controller' } }, control: !1 },
			title: {
				description: 'Recommendation title',
				table: {
					category: 'Templates Legal',
					type: { summary: 'string | JSX Element' },
					defaultValue: { summary: 'controller.store.profile.display.templateParameters.title' },
				},
				control: { type: 'text' },
			},
			hideTitle: {
				defaultValue: !1,
				description: 'hide title',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			description: {
				description: 'recommendation description',
				table: {
					category: 'Templates Legal',
					type: { summary: 'string' },
					defaultValue: { summary: 'controller.store.profile.display.templateParameters.description' },
				},
				control: { type: 'text' },
			},
			loop: {
				defaultValue: !0,
				description: 'Recommendation pagination loops',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !0 } },
				control: { type: 'boolean' },
			},
			results: {
				description: 'Results store reference, overrides controller.store.results',
				type: { required: !1 },
				table: { category: 'Templates Legal', type: { summary: 'Results store object' } },
				control: !1,
			},
			resultComponent: { description: 'Slot for custom result component', table: { type: { summary: 'component' } } },
			modules: {
				description: 'Additional Swiper modules',
				table: { type: { summary: 'SwiperModule[]' }, defaultValue: { summary: '[Navigation, Pagination, Scrollbar, A11y]' } },
				control: !1,
			},
			pagination: {
				defaultValue: !1,
				description: 'Display pagination dots',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			scrollbar: {
				defaultValue: !1,
				description: 'Display scrollbar',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			vertical: {
				defaultValue: !1,
				description: 'Carousel vertical slide direction',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			hideButtons: {
				defaultValue: !1,
				description: 'Hide prev/next buttons',
				table: { category: 'Templates Legal', type: { summary: 'boolean' }, defaultValue: { summary: !1 } },
				control: { type: 'boolean' },
			},
			prevButton: {
				description: 'Previous button',
				table: { category: 'Templates Legal', type: { summary: 'string | JSX Element' } },
				control: { type: 'text' },
			},
			nextButton: {
				description: 'Next button',
				table: { category: 'Templates Legal', type: { summary: 'string | JSX Element' } },
				control: { type: 'text' },
			},
			lazyRender: {
				description: 'Lazy render settings object',
				defaultValue: { enabled: !0, offset: '10%' },
				table: {
					category: 'Templates Legal',
					type: { summary: '{ enabled: boolean, offset?: string }' },
					defaultValue: { summary: "{ enabled: true, offset: '10%' }" },
				},
				control: { type: 'object' },
			},
			breakpoints: {
				defaultValue: void 0,
				description: 'Responsive props keyed by viewport width',
				table: { type: { summary: 'object' }, defaultValue: { summary: 'Breakpoint object' } },
				control: !1,
			},
			slidesPerView: {
				description: 'Number of results to display per page; overridden by breakpoints values when breakpoints are in use',
				table: { category: 'Templates Legal', type: { summary: "number | 'auto'" } },
				control: { type: 'number' },
			},
			lang: {
				description: 'Custom language keys (`titleText`)',
				table: { type: { summary: 'Partial<RecommendationLang>' } },
				control: { type: 'object' },
			},
			...i,
		},
	},
	o = l.recommendation({ id: 'Recommendation', tag: 'trending', globals: { siteId: 'atkzs2' } }),
	t = {
		render: (e, { loaded: { controller: n } }) => r(a, { ...e, controller: n }),
		loaders: [
			async () => (
				o.on('afterStore', async ({ controller: e }, n) => {
					e.store.results.forEach((s) => (s.mappings.core.url = '#')), await n();
				}),
				await o.search(),
				{ controller: o }
			),
		],
	};
t.parameters = {
	...t.parameters,
	docs: {
		...t.parameters?.docs,
		source: {
			originalSource: `{
  render: (props: RecommendationProps, {
    loaded: {
      controller
    }
  }: {
    loaded: {
      controller: RecommendationController;
    };
  }) => {
    return <Recommendation {...props} controller={controller} />;
  },
  loaders: [async () => {
    snapInstance.on('afterStore', async ({
      controller
    }: {
      controller: RecommendationController;
    }, next: Next) => {
      // neutralize mock links. '#' is safe here because recommendations hold no UrlManager state —
      // in a Search or Autocomplete story it would clear the hash-stored filter/sort/pageSize params.
      controller.store.results.forEach((result: Product) => result.mappings.core!.url = '#');
      await next();
    });
    await snapInstance.search();
    return {
      controller: snapInstance
    };
  }]
}`,
			...t.parameters?.docs?.source,
		},
	},
};
const ee = ['Default'];
export { t as Default, ee as __namedExportsOrder, $ as default };
