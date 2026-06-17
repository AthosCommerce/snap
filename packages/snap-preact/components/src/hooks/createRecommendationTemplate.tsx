import { h } from 'preact';
import { RecommendationController, RecommendationControllerConfig } from '@athoscommerce/snap-controller';
import { SnapTemplates } from '../../../src';
import { useSnap } from '../providers';
import { useCreateController } from './useCreateController';
import { useComponent } from './useComponent';
import { JSXComponent, RecommendationComponentNames, RecommendationComponentProps } from '../types';

export type TemplatesType = {
	recommendation?: {
		enabled: boolean;
		component?: RecommendationComponentNames;
		resultComponent?: string;
		config?: Partial<RecommendationControllerConfig>;
	};
};

type ReturnType = {
	RecommendationTemplateComponent: ((props: RecommendationComponentProps) => h.JSX.Element | null) | undefined;
	RecommendationTemplateResultComponent: JSXComponent | undefined;
	recsController: RecommendationController | undefined;
};

export function createRecommendationTemplate(templates: TemplatesType): ReturnType {
	let recommendationTemplateComponent: ((props: RecommendationComponentProps) => h.JSX.Element | null) | undefined;
	let recommendationTemplateResultComponent: JSXComponent | undefined;
	let recsController: RecommendationController | undefined;
	const snap = useSnap() as SnapTemplates;

	const recommendationTemplatesEnabled = Boolean(templates?.recommendation?.enabled);
	const componentName = recommendationTemplatesEnabled ? templates?.recommendation?.component || 'RecommendationGrid' : undefined;
	const resultComponentName = recommendationTemplatesEnabled ? templates?.recommendation?.resultComponent || 'Result' : undefined;

	const recommendationTemplateComponentMap = snap?.templates?.library.import.component.recommendation.default || {};
	const recommendationTemplateResultComponentMap = snap?.templates?.library.import.component.result || {};

	const { ComponentOverride: namedRecommendationTemplateComponent, shouldWaitForNamedOverride: shouldWaitForNamedRecommendationTemplateComponent } =
		useComponent(recommendationTemplateComponentMap, componentName);
	const {
		ComponentOverride: namedRecommendationTemplateResultComponent,
		shouldWaitForNamedOverride: shouldWaitForNamedRecommendationTemplateResultComponent,
	} = useComponent(recommendationTemplateResultComponentMap, resultComponentName);

	if (recommendationTemplatesEnabled) {
		recommendationTemplateComponent = shouldWaitForNamedRecommendationTemplateComponent
			? undefined
			: (namedRecommendationTemplateComponent as ((props: RecommendationComponentProps) => h.JSX.Element | null) | undefined);
		recommendationTemplateResultComponent = shouldWaitForNamedRecommendationTemplateResultComponent
			? undefined
			: namedRecommendationTemplateResultComponent;

		if (snap?.templates) {
			const mergedConfig = Object.assign(
				{
					id: '',
					tag: 'no-results',
					branch: 'production',
				},
				templates.recommendation!.config
			);
			mergedConfig.id = mergedConfig.id || `search-${mergedConfig.tag}`;

			recsController = useCreateController<RecommendationController>(snap, 'recommendation', mergedConfig);
			if (!recsController?.store?.loaded && !recsController?.store?.loading && recsController?.store.error?.type !== 'error') {
				recsController?.search();
			}
		}
	}

	const returnObj: ReturnType = {
		RecommendationTemplateComponent: recommendationTemplateComponent,
		RecommendationTemplateResultComponent: recommendationTemplateResultComponent,
		recsController: recsController,
	};

	return returnObj;
}
