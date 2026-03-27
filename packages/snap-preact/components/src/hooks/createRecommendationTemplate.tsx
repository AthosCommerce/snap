import { h } from 'preact';
import { RecommendationController, RecommendationControllerConfig } from '@athoscommerce/snap-controller';
import { SnapTemplates } from '../../../src';
import { useSnap } from '../providers';
import { useCreateController } from './useCreateController';
import { useComponent } from './useComponent';
import { RecommendationComponentNames, RecommendationComponentProps } from '../types';

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
	RecommendationTemplateResultComponent: JSX.Element | undefined;
	recsController: RecommendationController | undefined;
};

export function createRecommendationTemplate(templates: TemplatesType): ReturnType {
	let recommendationTemplateComponent: ((props: RecommendationComponentProps) => h.JSX.Element | null) | undefined;
	let recommendationTemplateResultComponent: JSX.Element | undefined;
	let recsController: RecommendationController | undefined;

	if (templates?.recommendation?.enabled) {
		const componentName = templates?.recommendation?.component || 'RecommendationGrid';
		const snap = useSnap() as SnapTemplates;

		if (snap?.templates) {
			const defaultResultComponentFromTheme = 'result';

			const resultComponentName = (templates?.recommendation?.resultComponent || defaultResultComponentFromTheme) as string;
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

			if (resultComponentName && snap?.templates?.library.import.component.result) {
				recommendationTemplateResultComponent = useComponent(snap?.templates?.library.import.component.result, resultComponentName) as
					| JSX.Element
					| undefined;
			}

			if (componentName && snap?.templates?.library.import.component.recommendation.default) {
				recommendationTemplateComponent = useComponent(snap?.templates?.library.import.component.recommendation.default, componentName);
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
