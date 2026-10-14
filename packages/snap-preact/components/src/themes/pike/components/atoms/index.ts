import { ThemeResponsiveComplete } from '../../../../providers';

// ATOMS Imports
import { badgeImage } from './badgeImage';
import { badgePill } from './badgePill';
import { badgeRectangle } from './badgeRectangle';
import { badgeText } from './badgeText';
import { banner } from './banner';
import { breadcrumbs } from './breadcrumbs';
import { button } from './button';
import { dropdown } from './dropdown';
import { formattedNumber } from './formattedNumber';
import { icon } from './icon';
import { image } from './image';
import { inlineBanner } from './inlineBanner';
import { loadingBar } from './loadingBar';
import { overlay } from './overlay';
import { paginationInfo } from './paginationInfo';
import { price } from './price';
import { searchHeader } from './searchHeader';
import { skeleton } from './skeleton';

export const atoms = {
	default: {
		...badgeImage.default,
		...badgePill.default,
		...badgeRectangle.default,
		...badgeText.default,
		...banner.default,
		...breadcrumbs.default,
		...button.default,
		...dropdown.default,
		...formattedNumber.default,
		...icon.default,
		...image.default,
		...inlineBanner.default,
		...loadingBar.default,
		...overlay.default,
		...paginationInfo.default,
		...price.default,
		...searchHeader.default,
		...skeleton.default,
	},
	mobile: {
		...badgeImage.mobile,
		...badgePill.mobile,
		...badgeRectangle.mobile,
		...badgeText.mobile,
		...banner.mobile,
		...breadcrumbs.mobile,
		...button.mobile,
		...dropdown.mobile,
		...formattedNumber.mobile,
		...icon.mobile,
		...image.mobile,
		...inlineBanner.mobile,
		...loadingBar.mobile,
		...overlay.mobile,
		...paginationInfo.mobile,
		...price.mobile,
		...searchHeader.mobile,
		...skeleton.mobile,
	},
	tablet: {
		...badgeImage.tablet,
		...badgePill.tablet,
		...badgeRectangle.tablet,
		...badgeText.tablet,
		...banner.tablet,
		...breadcrumbs.tablet,
		...button.tablet,
		...dropdown.tablet,
		...formattedNumber.tablet,
		...icon.tablet,
		...image.tablet,
		...inlineBanner.tablet,
		...loadingBar.tablet,
		...overlay.tablet,
		...paginationInfo.tablet,
		...price.tablet,
		...searchHeader.tablet,
		...skeleton.tablet,
	},
	desktop: {
		...badgeImage.desktop,
		...badgePill.desktop,
		...badgeRectangle.desktop,
		...badgeText.desktop,
		...banner.desktop,
		...breadcrumbs.desktop,
		...button.desktop,
		...dropdown.desktop,
		...formattedNumber.desktop,
		...icon.desktop,
		...image.desktop,
		...inlineBanner.desktop,
		...loadingBar.desktop,
		...overlay.desktop,
		...paginationInfo.desktop,
		...price.desktop,
		...searchHeader.desktop,
		...skeleton.desktop,
	},
} as unknown as ThemeResponsiveComplete;
