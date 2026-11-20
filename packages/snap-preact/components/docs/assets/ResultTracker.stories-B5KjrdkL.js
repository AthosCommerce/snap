import { j as r } from './iframe-CBMP6iq3.js';
import { R as l } from './ResultTracker-CBy-MeUe.js';
import { S as a } from './snapify-CNA1I2DS.js';
import { c } from './componentArgs-DfBuq-N1.js';
import { Result as i } from './Result-C3mmRPuX.js';
import './preload-helper-PPVm8Dsz.js';
import './createImpressionObserver-BETervzW.js';
import './RecommendationController-DcdNSeJF.js';
import './AutocompleteController-3_eY9TEV.js';
import './types-DqusP3LW.js';
import './defined-CdKp_MB-.js';
import './useLang-Dx66cFD0.js';
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
import './useDisplaySettings-DCCuBpZP.js';
import './Slideshow-DT_s099s.js';
import './Grid-BA6Sqccj.js';
import './selectionKey-CmN2KTR5.js';
import './handleize-xLHhB8k5.js';
import './List-Bltyzt-T.js';
import './Checkbox-Bf1jD8rh.js';
import './Dropdown-DmIQwaKA.js';
import './useClickOutside-CYgcb6yY.js';
import './truncate-CqAvmyZI.js';
const u =
		"# ResultTracker\n\nAdds impression and click tracking to an individual result within a controller. When using the Results component, it will already contain this component.\n\nThis component is used for Beacon 2.0 tracking and replaces the need for using the `RecommendationResultTracker` as well as the `RecommendationProfileTracker`.\n\nAlternatively, the `withTracking` HoC can also be used to track the same events. It also removes the additional `div` element that ResultTracker adds.\n\n## Usage\n```tsx\nimport { ResultTracker } from '@athoscommerce/snap-preact/components';\n```\n\n### controller\nThe required `controller` prop specifies a reference to a Controller object.\n\n```tsx\n<ResultTracker controller={controller} result={result}>\n	<Result result={result}></Result>\n</ResultTracker>\n```\n\n### children\nThe required `children` prop specifies the contents of the result component (the tracker is a wrapper around this). \n\n```tsx\n<ResultTracker controller={controller} result={result}>\n	<Result result={result}></Result>\n</ResultTracker>\n```\n\n### result\nThe required `result` prop specifies a reference to a product object from the `results` store array. This reference is used when gathering the required data to track.\n\n```tsx\n<ResultTracker controller={controller} result={result}>\n	<Result result={result}></Result>\n</ResultTracker>\n```\n\n### track\nThe `track` prop is an object that allows for the disabling of parts of the tracking functionality. The keys are `impression` and `click` - setting them to false prevents the tracking event for the result. The following example would disable all events except for the click tracking.\n\n```tsx\n<ResultTracker controller={controller} result={result} track={{ impression: false }}>\n	<Result result={result}></Result>\n</ResultTracker>\n```\n",
	X = {
		title: 'Trackers/ResultTracker',
		component: l,
		parameters: { docs: { description: { component: u } } },
		decorators: [(t) => r('div', { style: { maxWidth: '250px' }, children: r(t, {}) })],
		argTypes: {
			controller: { description: 'Controller reference', type: { required: !0 }, table: { type: { summary: 'Controller' } }, control: !1 },
			result: {
				description: 'Result store Product reference',
				type: { required: !0 },
				table: { type: { summary: 'result store Product or Banner object' } },
				control: !1,
			},
			track: {
				description: 'Enable or disable impression and click tracking',
				table: { type: { summary: '{ impression?: boolean, click?: boolean }' }, defaultValue: { summary: '{ impression: true, click: true }' } },
				control: { type: 'object' },
			},
			...c,
		},
	},
	s = a.search({ id: 'SearchResultTracker', globals: { siteId: 'atkzs2', search: { query: { string: '*' } } } }),
	e = {
		render: (t, { loaded: { controller: o } }) => {
			const n = o?.store?.results[0];
			return r(l, { ...t, controller: o, result: n, children: r(i, { result: n }) });
		},
		loaders: [async () => (await s.search(), { controller: s })],
	};
e.parameters = {
	...e.parameters,
	docs: {
		...e.parameters?.docs,
		source: {
			originalSource: `{
  render: (props: ResultTrackerProps, {
    loaded: {
      controller
    }
  }: {
    loaded: {
      controller: SearchController;
    };
  }) => {
    const firstResult = controller?.store?.results[0] as Product;
    return <ResultTracker {...props} controller={controller} result={firstResult}>
                <Result result={firstResult} />
            </ResultTracker>;
  },
  loaders: [async () => {
    await snapInstance.search();
    return {
      controller: snapInstance
    };
  }]
}`,
			...e.parameters?.docs?.source,
		},
	},
};
const Y = ['Default'];
export { e as Default, Y as __namedExportsOrder, X as default };
