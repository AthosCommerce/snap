import { h } from 'preact';
import { css, useTheme } from '@emotion/react';
import { observer } from 'mobx-react-lite';

import { defined, mergeProps, mergeStyles } from '../../../utilities';
import { ComponentProps, StyleScript } from '../../../types';
import { RecommendationBundle, RecommendationBundleLang, RecommendationBundleProps } from '../RecommendationBundle';
import { Product } from '@athoscommerce/snap-store-mobx';
import { AbstractController, RecommendationController } from '@athoscommerce/snap-controller';
import { Theme } from '../../../providers';

const defaultStyles: StyleScript<RecommendationBundleVerticalProps> = () => {
	return css({
		'.ss__recommendation-bundle-vertical__wrapper': {
			flexDirection: 'column',
		},
		'.ss__recommendation-bundle-vertical__wrapper__cta': {
			textAlign: 'center',
		},
	});
};

const alias = 'recommendationBundleVertical';
export const RecommendationBundleVertical = observer((properties: RecommendationBundleVerticalProps) => {
	const globalTheme: Theme = useTheme();

	//mergeprops only uses names that are passed via properties, so this cannot be put in the defaultProps
	const _properties = {
		name: properties.controller?.store?.profile?.tag?.toLowerCase(),
		...properties,
	};

	const { treePath, disableStyles, controller, style: _, styleScript: __, themeStyleScript: ___, ...additionalProps } = _properties;

	const subProps: RecommendationBundleVerticalSubProps = {
		recommendationBundle: {
			// default props
			ctaInline: false,
			carousel: {
				enabled: false,
			},
			separatorIcon: false,
			alias: alias,
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: _properties?.theme,
			treePath,
		},
	};

	const mergedProps = mergeProps(alias, globalTheme, {}, _properties);
	const styling = mergeStyles<RecommendationBundleVerticalProps>(mergedProps, defaultStyles);

	return <RecommendationBundle controller={controller} {...styling} {...subProps.recommendationBundle} {...additionalProps} />;
});

export type RecommendationBundleVerticalProps = {
	controller: RecommendationController & AbstractController;
	alias?: string | undefined;
	lang?: Partial<RecommendationBundleLang> | undefined;
	results?: Product[] | undefined;
} & RecommendationBundleVerticalTemplatesLegalProps &
	Omit<ComponentProps, 'customComponent'>;

export type RecommendationBundleVerticalTemplatesLegalProps = Omit<
	RecommendationBundleProps,
	'controller' | 'alias' | 'lang' | 'results' | 'vertical' | 'ctaInline' | 'carousel' | 'slidesPerView'
>;

interface RecommendationBundleVerticalSubProps {
	recommendationBundle: Partial<RecommendationBundleProps>;
}
