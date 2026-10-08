import { ThemeResponsiveComplete } from '../../../../providers';

// MOLECULES Imports
import { calloutBadge } from './calloutBadge';
import { carousel } from './carousel';
import { checkbox } from './checkbox';
import { errorHandler } from './errorHandler';
import { facetGridOptions } from './facetGridOptions';
import { facetHierarchyOptions } from './facetHierarchyOptions';
import { facetListOptions } from './facetListOptions';
import { facetPaletteOptions } from './facetPaletteOptions';
import { facetSlider } from './facetSlider';
import { filter } from './filter';
import { gallery } from './gallery';
import { grid } from './grid';
import { layoutSelector } from './layoutSelector';
import { list } from './list';
import { loadMore } from './loadMore';
import { modal } from './modal';
import { overlayBadge } from './overlayBadge';
import { overlayResult } from './overlayResult';
import { pagination } from './pagination';
import { perPage } from './perPage';
import { productDetailTable } from './productDetailTable';
import { quantityPicker } from './quantityPicker';
import { radio } from './radio';
import { radioList } from './radioList';
import { result } from './result';
import { searchInput } from './searchInput';
import { select } from './select';
import { slideshow } from './slideshow';
import { slideout } from './slideout';
import { sortBy } from './sortBy';
import { rating } from './rating';
import { swatches } from './swatches';
import { tabSelection } from './tabSelection';
import { variantSelection } from './variantSelection';
import { terms } from './terms';

export const molecules = {
	default: {
		...calloutBadge.default,
		...carousel.default,
		...checkbox.default,
		...errorHandler.default,
		...facetGridOptions.default,
		...facetHierarchyOptions.default,
		...facetListOptions.default,
		...facetPaletteOptions.default,
		...facetSlider.default,
		...filter.default,
		...gallery.default,
		...grid.default,
		...layoutSelector.default,
		...list.default,
		...loadMore.default,
		...modal.default,
		...overlayBadge.default,
		...overlayResult.default,
		...pagination.default,
		...perPage.default,
		...productDetailTable.default,
		...quantityPicker.default,
		...radio.default,
		...radioList.default,
		...rating.default,
		...result.default,
		...searchInput.default,
		...select.default,
		...slideshow.default,
		...slideout.default,
		...sortBy.default,
		...swatches.default,
		...tabSelection.default,
		...terms.default,
		...variantSelection.default,
	},
	mobile: {
		...calloutBadge.mobile,
		...carousel.mobile,
		...checkbox.mobile,
		...errorHandler.mobile,
		...facetGridOptions.mobile,
		...facetHierarchyOptions.mobile,
		...facetListOptions.mobile,
		...facetPaletteOptions.mobile,
		...facetSlider.mobile,
		...filter.mobile,
		...gallery.mobile,
		...grid.mobile,
		...layoutSelector.mobile,
		...list.mobile,
		...loadMore.mobile,
		...modal.mobile,
		...overlayBadge.mobile,
		...overlayResult.mobile,
		...pagination.mobile,
		...perPage.mobile,
		...productDetailTable.mobile,
		...quantityPicker.mobile,
		...radio.mobile,
		...radioList.mobile,
		...rating.mobile,
		...result.mobile,
		...searchInput.mobile,
		...select.mobile,
		...slideshow.mobile,
		...slideout.mobile,
		...sortBy.mobile,
		...swatches.mobile,
		...tabSelection.mobile,
		...terms.mobile,
		...variantSelection.mobile,
	},
	tablet: {
		...calloutBadge.tablet,
		...carousel.tablet,
		...checkbox.tablet,
		...errorHandler.tablet,
		...facetGridOptions.tablet,
		...facetHierarchyOptions.tablet,
		...facetListOptions.tablet,
		...facetPaletteOptions.tablet,
		...facetSlider.tablet,
		...filter.tablet,
		...gallery.tablet,
		...grid.tablet,
		...layoutSelector.tablet,
		...list.tablet,
		...loadMore.tablet,
		...modal.tablet,
		...overlayBadge.tablet,
		...overlayResult.tablet,
		...pagination.tablet,
		...perPage.tablet,
		...productDetailTable.tablet,
		...quantityPicker.tablet,
		...radio.tablet,
		...radioList.tablet,
		...rating.tablet,
		...result.tablet,
		...searchInput.tablet,
		...select.tablet,
		...slideshow.tablet,
		...slideout.tablet,
		...sortBy.tablet,
		...swatches.tablet,
		...tabSelection.tablet,
		...terms.tablet,
		...variantSelection.tablet,
	},
	desktop: {
		...calloutBadge.desktop,
		...carousel.desktop,
		...checkbox.desktop,
		...errorHandler.desktop,
		...facetGridOptions.desktop,
		...facetHierarchyOptions.desktop,
		...facetListOptions.desktop,
		...facetPaletteOptions.desktop,
		...facetSlider.desktop,
		...filter.desktop,
		...gallery.desktop,
		...grid.desktop,
		...layoutSelector.desktop,
		...list.desktop,
		...loadMore.desktop,
		...modal.desktop,
		...overlayBadge.desktop,
		...overlayResult.desktop,
		...pagination.desktop,
		...perPage.desktop,
		...productDetailTable.desktop,
		...quantityPicker.desktop,
		...radio.desktop,
		...radioList.desktop,
		...rating.desktop,
		...result.desktop,
		...searchInput.desktop,
		...select.desktop,
		...slideshow.desktop,
		...slideout.desktop,
		...sortBy.desktop,
		...swatches.desktop,
		...tabSelection.desktop,
		...terms.desktop,
		...variantSelection.desktop,
	},
} as unknown as ThemeResponsiveComplete;
