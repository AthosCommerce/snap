import { cookies, url } from '@athoscommerce/snap-toolbox';
import { Snap, SnapConfig, SnapServices } from './Snap';
import {
	TEMPLATE_EDIT_COOKIE,
	TEMPLATE_EDITOR_PARAM,
	SnapTemplatesConfigLocked as SnapIntegrationConfig,
	SnapTemplatesConfigUnlocked,
	createSnapConfig,
} from './Templates/SnapTemplates';
import { TemplatesStore } from './Templates/Stores/TemplateStore';
import deepmerge from 'deepmerge';
import { isPlainObject } from 'is-plain-object';

type HybridIntegrationConfig = {
	templatesConfig: SnapIntegrationConfig;
	snapConfig: SnapConfig;
	services?: SnapServices;
};

export class SnapHybrid extends Snap {
	constructor(config: HybridIntegrationConfig) {
		const urlParams = url(window.location.href);
		const editMode = Boolean((urlParams?.params?.query && TEMPLATE_EDITOR_PARAM in urlParams.params.query) || cookies.get(TEMPLATE_EDIT_COOKIE));

		const templatesStore = new TemplatesStore({ config: config.templatesConfig, settings: { editMode } });
		const convertedTemplatesConfig = createSnapConfig({ ...config.templatesConfig, unlocked: true } as SnapTemplatesConfigUnlocked, templatesStore);
		const mergedConfig = deepmerge(convertedTemplatesConfig, config.snapConfig, {
			isMergeableObject: (value: unknown) => isPlainObject(value) || Array.isArray(value),
			arrayMerge: (target: any[], source: any[]) => [...target, ...source],
		});

		super(mergedConfig, { ...config.services, templatesStore });
	}
}
