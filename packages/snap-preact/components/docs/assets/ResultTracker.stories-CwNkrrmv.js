import { j as r } from './iframe-U9T2Y9ZS.js';
import { R as l } from './ResultTracker-D-Jc6Lj4.js';
import { S as a } from './snapify-Df13VkEj.js';
import { c } from './componentArgs-DfBuq-N1.js';
import { Result as i } from './Result-Dham3Ici.js';
import './preload-helper-PPVm8Dsz.js';
import './createImpressionObserver-B76-2cq4.js';
import './RecommendationController-C8Rx5Y3Q.js';
import './AutocompleteController-DOm9KL9U.js';
import './types-DqusP3LW.js';
import './defined-CdKp_MB-.js';
import './useLang-Dx66cFD0.js';
import './OverlayBadge-DuC3EbW-.js';
import './defaultBadgeComponentMap-tdX2yVU2.js';
import './BadgeImage-DTqNIdDt.js';
import './BadgeRectangle-CXqv8JEU.js';
import './BadgePill-DqaxSvIL.js';
import './BadgeText-Md7lKmkD.js';
import './Image-C5uuJXju.js';
import './Button-rwG4FGUK.js';
import './useA11y-BuGQuOJb.js';
import './CalloutBadge-hFFhia-q.js';
import './fieldNameToComponentName-CjebIDZG.js';
import './Rating-DUxc2ffg.js';
import './Price-BlC0Ukx2.js';
import './formatNumber-C6zKvI-v.js';
import './VariantSelection-DtVeRyMN.js';
import './Swatches-mqYnXcBs.js';
import './names-Cka5BSlk.js';
import './useDisplaySettings-9sk5Dt1c.js';
import './Slideshow-DqC6sQhv.js';
import './Grid-D_Po4riX.js';
import './selectionKey-CmN2KTR5.js';
import './handleize-xLHhB8k5.js';
import './List-9eXTq04g.js';
import './Checkbox-Dsv4fCi7.js';
import './Dropdown-Bgi8cN4O.js';
import './useClickOutside-DeMSpwd-.js';
import './truncate-CqAvmyZI.js';
const u =
		"# ResultTracker\n\nAdds impression, render and click tracking to an individual result within a controller. When using the Results component, it will already contain this component.\n\nThis component is used for Beacon 2.0 tracking and replaces the need for using the `RecommendationResultTracker` as well as the `RecommendationProfileTracker`.\n\nAlternatively, the `withTracking` HoC can also be used to track the same events. It also removes the additional `div` element that ResultTracker adds.\n\n## Usage\n```tsx\nimport { ResultTracker } from '@athoscommerce/snap-preact/components';\n```\n\n### controller\nThe required `controller` prop specifies a reference to a Controller object.\n\n```tsx\n<ResultTracker controller={controller} result={result}>\n	<Result result={result}></Result>\n</ResultTracker>\n```\n\n### children\nThe required `children` prop specifies the contents of the result component (the tracker is a wrapper around this). \n\n```tsx\n<ResultTracker controller={controller} result={result}>\n	<Result result={result}></Result>\n</ResultTracker>\n```\n\n### result\nThe required `result` prop specifies a reference to a product object from the `results` store array. This reference is used when gathering the required data to track.\n\n```tsx\n<ResultTracker controller={controller} result={result}>\n	<Result result={result}></Result>\n</ResultTracker>\n```\n\n### track\nThe `track` prop is an object that allows for the disabling of parts of the tracking functionality. The keys are `render`, `impression` and `click` - setting them to false prevents the tracking event for the result. The following example would disable all events except for the click tracking.\n\n```tsx\n<ResultTracker controller={controller} result={result} track={{ render: false, impression: false }}>\n	<Result result={result}></Result>\n</ResultTracker>\n```\n",
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
				table: { type: { summary: 'result store Product object' } },
				control: !1,
			},
			...c,
		},
	},
	s = a.search({ id: 'SearchResultTracker', globals: { siteId: 'atkzs2', search: { query: { string: '*' } } } }),
	e = {
		render: (t, { loaded: { controller: n } }) => {
			const o = n?.store?.results[0];
			return r(l, { ...t, controller: n, result: o, children: r(i, { result: o }) });
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
