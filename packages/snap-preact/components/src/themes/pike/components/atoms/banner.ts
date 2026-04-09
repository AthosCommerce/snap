import { css } from '@emotion/react';
import type { BannerProps, BannerTemplatesLegalProps } from '../../../../components/Atoms/Banner';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Banner component
const bannerStyleScript = (props: BannerProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// banner styles
	const bannerStyles = css({
		color: variables?.colors?.text,
		...custom.styles.boxSizing('banner', props?.treePath, props?.name),
	});

	return bannerStyles;
};

// Banner component props
export const banner: ThemeComponent<'banner', BannerProps, BannerTemplatesLegalProps> = {
	default: {
		banner: {
			themeStyleScript: bannerStyleScript,
		},
	},
};
