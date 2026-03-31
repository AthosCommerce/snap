import { css } from '@emotion/react';
import type { InlineBannerProps, InlineBannerTemplatesLegalProps } from '../../../../components/Atoms/InlineBanner';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the InlineBanner component
const inlineBannerStyleScript = (props: InlineBannerProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const isAutocomplete = props?.treePath?.includes('autocomplete') ? true : false;

	// inline banner styles
	const inlineBannerStyles = css({
		overflow: isAutocomplete ? 'hidden' : '',
		...custom.styles.boxSizing('inlineBanner', props?.treePath, props?.name),
		'&.ss__inline-banner--grid': {
			maxHeight: isAutocomplete ? '212px' : '',
		},
		'&.ss__inline-banner--list': {
			maxHeight: isAutocomplete ? '100px' : '',
		},
	});

	return inlineBannerStyles;
};

// InlineBanner component props
export const inlineBanner: ThemeComponent<'inlineBanner', InlineBannerProps, InlineBannerTemplatesLegalProps> = {
	default: {
		inlineBanner: {
			themeStyleScript: inlineBannerStyleScript,
		},
	},
};
