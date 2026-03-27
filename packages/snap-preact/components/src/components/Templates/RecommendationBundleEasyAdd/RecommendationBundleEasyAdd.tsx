import { h } from 'preact';
import { css, useTheme } from '@emotion/react';
import { observer } from 'mobx-react-lite';

import { defined, mergeProps, mergeStyles } from '../../../utilities';
import { ComponentProps, StyleScript } from '../../../types';
import { RecommendationBundle, RecommendationBundleLang, RecommendationBundleProps } from '../RecommendationBundle';
import { Product } from '@athoscommerce/snap-store-mobx';
import { AbstractController, RecommendationController } from '@athoscommerce/snap-controller';
import { Theme } from '../../../providers';

const defaultStyles: StyleScript<RecommendationBundleEasyAddProps> = () => {
	return css({
		'.ss__recommendation-bundle-easy-add__wrapper__cta': {
			textAlign: 'center',
		},
	});
};

const alias = 'recommendationBundleEasyAdd';
export const RecommendationBundleEasyAdd = observer((properties: RecommendationBundleEasyAddProps) => {
	const globalTheme: Theme = useTheme();

	//mergeprops only uses names that are passed via properties, so this cannot be put in the defaultProps
	const _properties = {
		name: properties.controller?.store?.profile?.tag?.toLowerCase(),
		...properties,
	};

	const { treePath, disableStyles, controller, style: _, styleScript: __, themeStyleScript: ___, ...additionalProps } = _properties;

	const subProps: RecommendationBundleEasyAddSubProps = {
		recommendationBundle: {
			// default props
			hideCheckboxes: true,
			seedText: '',
			ctaButtonText: 'Add Both',
			ctaInline: false,
			hideSeed: true,
			alias: alias,
			// vertical: true,
			limit: 1,
			carousel: {
				enabled: false,
			},
			separatorIcon: false,
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
	const styling = mergeStyles<RecommendationBundleEasyAddProps>(mergedProps, defaultStyles);

	return <RecommendationBundle controller={controller} {...styling} {...subProps.recommendationBundle} {...additionalProps} />;
});

export type RecommendationBundleEasyAddProps = {
	controller: RecommendationController & AbstractController;
	alias?: string | undefined;
	lang?: Partial<RecommendationBundleLang> | undefined;
	results?: Product[] | undefined;
} & RecommendationBundleEasyAddTemplatesLegalProps &
	ComponentProps<RecommendationBundleEasyAddProps>;

export type RecommendationBundleEasyAddTemplatesLegalProps = Omit<
	RecommendationBundleProps,
	| 'controller'
	| 'alias'
	| 'lang'
	| 'results'
	| 'hideSeed'
	| 'limit'
	| 'hideCheckboxes'
	| 'carousel'
	| 'separatorIcon'
	| 'separatorIconSeedOnly'
	| 'preselectedCount'
	| 'breakpoints'
>;

interface RecommendationBundleEasyAddSubProps {
	recommendationBundle: Partial<RecommendationBundleProps>;
}
