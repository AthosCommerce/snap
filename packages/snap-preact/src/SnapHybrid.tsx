import { Snap, SnapConfig, SnapServices } from './Snap';
import { SnapTemplatesConfigLocked, SnapTemplatesConfigUnlocked, createSnapConfig } from './Templates/SnapTemplates';
import { TemplatesStore } from './Templates/Stores/TemplateStore';
import deepmerge from 'deepmerge';
import { isPlainObject } from 'is-plain-object';
import { version } from '@athoscommerce/snap-toolbox';
type HybridIntegrationConfig = {
	templatesConfig: SnapTemplatesConfigLocked | SnapTemplatesConfigUnlocked;
	snapConfig: SnapConfig;
	services?: SnapServices;
};

export class SnapHybrid extends Snap {
	constructor(config: HybridIntegrationConfig) {
		const templatesStore = new TemplatesStore({ config: config.templatesConfig });
		const convertedTemplatesConfig = createSnapConfig(config.templatesConfig, templatesStore);
		const mergedConfig = deepmerge(convertedTemplatesConfig, config.snapConfig, {
			isMergeableObject: (value: unknown) => isPlainObject(value) || Array.isArray(value),
			arrayMerge: (target: any[], source: any[]) => [...target, ...source],
		});

		mergedConfig.client.config = {
			...mergedConfig.client.config,
			initiator: `snap/hybrid/${version}`,
		};
		mergedConfig.tracker.config = {
			...mergedConfig.tracker.config,
			initiator: `snap/hybrid/${version}`,
			framework: 'snap/hybrid',
		};

		super(mergedConfig, { ...config.services, templatesStore });
	}
}
