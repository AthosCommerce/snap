import { ThemeResponsiveComplete } from '../../../../providers';

// ATOMS Imports
import { breadcrumbs } from './breadcrumbs';
import { button } from './button';
import { dropdown } from './dropdown';
import { icon } from './icon';
import { image } from './image';
import { loadingBar } from './loadingBar';
import { price } from './price';
import { searchHeader } from './searchHeader';
import { skeleton } from './skeleton';

export const atoms = {
	default: {
		...breadcrumbs.default,
		...button.default,
		...dropdown.default,
		...icon.default,
		...image.default,
		...loadingBar.default,
		...price.default,
		...searchHeader.default,
		...skeleton.default,
	},
	mobile: {
		...breadcrumbs.mobile,
		...button.mobile,
		...dropdown.mobile,
		...icon.mobile,
		...image.mobile,
		...loadingBar.mobile,
		...price.mobile,
		...searchHeader.mobile,
		...skeleton.mobile,
	},
	tablet: {
		...breadcrumbs.tablet,
		...button.tablet,
		...dropdown.tablet,
		...icon.tablet,
		...image.tablet,
		...loadingBar.tablet,
		...price.tablet,
		...searchHeader.tablet,
		...skeleton.tablet,
	},
	desktop: {
		...breadcrumbs.desktop,
		...button.desktop,
		...dropdown.desktop,
		...icon.desktop,
		...image.desktop,
		...loadingBar.desktop,
		...price.desktop,
		...searchHeader.desktop,
		...skeleton.desktop,
	},
} as unknown as ThemeResponsiveComplete;
