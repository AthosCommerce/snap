import { Banner, BannerContent, ContentType, MerchandisingContentBanner, Product } from '@athoscommerce/snap-store-mobx';
import type { SearchController, AutocompleteController, RecommendationController, QuickviewController } from '@athoscommerce/snap-controller';
import { useEffect, type MutableRef } from 'preact/hooks';
import { createImpressionObserver } from '../utilities';
import { TRACKING_ATTRIBUTE } from '../providers/withTracking';

interface UseTrackingProps {
	controller: SearchController | AutocompleteController | RecommendationController | QuickviewController;
	result: Product;
	banner?: Banner;
	type?: ContentType;
	content?: BannerContent;
	track?: {
		impression?: boolean;
		click?: boolean;
	};
}

export function useTracking({ controller, result, banner, type, content, track }: UseTrackingProps): { trackingRef: MutableRef<HTMLElement | null> } {
	if (!controller) {
		console.warn('Warning: No controller provided to useTracking');
	}

	if (!result) {
		console.warn('Warning: No result provided to useTracking');
	}
	if (!result && !banner && (!type || !content)) {
		console.warn('Warning: No result or banner provided to withTracking');
	}

	const mergedTrack = {
		impression: true,
		click: true,
		...track,
	};

	const { ref, inViewport } = createImpressionObserver();
	useEffect(() => {
		if (inViewport && mergedTrack.impression) {
			if (type && content && !result && ['search', 'autocomplete'].includes(controller?.type || '')) {
				(controller as SearchController | AutocompleteController)?.track.banner.impression(content[type]![0] as MerchandisingContentBanner);
			} else if (!result?.bundleSeed) {
				controller?.track.product.impression(result || banner);
			}
		}
	}, [inViewport]);

	useEffect(() => {
		const currentRef = ref.current;
		// TRACKING_ATTRIBUTE marks a click-tracked boundary (see isClickWithinBannerLink),
		// so it is only set when click tracking is enabled
		if (currentRef && mergedTrack.click) {
			const handleClick = (e: MouseEvent) => {
				if (type && content && !result && ['search', 'autocomplete'].includes(controller?.type || '')) {
					(controller as SearchController | AutocompleteController)?.track.banner.click(e, content[type]![0] as MerchandisingContentBanner);
				} else {
					controller?.track.product.click(e, result || banner);
				}
			};

			currentRef.setAttribute(TRACKING_ATTRIBUTE, 'true');
			currentRef.addEventListener('click', handleClick);
			return () => {
				currentRef.removeEventListener('click', handleClick);
			};
		}
	}, [controller, result, banner, type, content, mergedTrack.click, mergedTrack.impression]);

	return { trackingRef: ref };
}
