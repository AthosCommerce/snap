import { ThemeResponsiveComplete } from '../../../../providers';

// TEMPLATES
import { autocompleteFixed } from './autocompleteFixed';
import { chat } from './chat';
import { autocompleteModal } from './autocompleteModal';
import { autocompleteSlideout } from './autocompleteSlideout';
import { recommendation } from './recommendation';
import { recommendationBundle } from './recommendationBundle';
import { recommendationBundleEasyAdd } from './recommendationBundleEasyAdd';
import { recommendationBundleList } from './recommendationBundleList';
import { recommendationBundleVertical } from './recommendationBundleVertical';
import { recommendationGrid } from './recommendationGrid';
import { recommendationEmail } from './recommendationEmail';
import { search } from './search';
import { searchHorizontal } from './searchHorizontal';
import { searchCollapsible } from './searchCollapsible';

export const templates: ThemeResponsiveComplete = {
	default: {
		...chat.default,
		...autocompleteFixed.default,
		...autocompleteModal.default,
		...autocompleteSlideout.default,
		...recommendation.default,
		...recommendationBundle.default,
		...recommendationBundleEasyAdd.default,
		...recommendationBundleList.default,
		...recommendationBundleVertical.default,
		...recommendationGrid.default,
		...recommendationEmail.default,
		...search.default,
		...searchCollapsible.default,
		...searchHorizontal.default,
	},
	mobile: {
		...chat.mobile,
		...autocompleteFixed.mobile,
		...autocompleteModal.mobile,
		...autocompleteSlideout.mobile,
		...recommendation.mobile,
		...recommendationBundle.mobile,
		...recommendationBundleEasyAdd.mobile,
		...recommendationBundleList.mobile,
		...recommendationBundleVertical.mobile,
		...recommendationGrid.mobile,
		...recommendationEmail.mobile,
		...search.mobile,
		...searchCollapsible.mobile,
		...searchHorizontal.mobile,
	},
	tablet: {
		...chat.tablet,
		...autocompleteFixed.tablet,
		...autocompleteModal.tablet,
		...autocompleteSlideout.tablet,
		...recommendation.tablet,
		...recommendationBundle.tablet,
		...recommendationBundleEasyAdd.tablet,
		...recommendationBundleList.tablet,
		...recommendationBundleVertical.tablet,
		...recommendationGrid.tablet,
		...recommendationEmail.tablet,
		...search.tablet,
		...searchCollapsible.tablet,
		...searchHorizontal.tablet,
	},
	desktop: {
		...chat.desktop,
		...autocompleteFixed.desktop,
		...autocompleteModal.desktop,
		...autocompleteSlideout.desktop,
		...recommendation.desktop,
		...recommendationBundle.desktop,
		...recommendationBundleEasyAdd.desktop,
		...recommendationBundleList.desktop,
		...recommendationBundleVertical.desktop,
		...recommendationGrid.desktop,
		...recommendationEmail.desktop,
		...search.desktop,
		...searchCollapsible.desktop,
		...searchHorizontal.desktop,
	},
};
