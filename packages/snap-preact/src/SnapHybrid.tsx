import { cookies, url } from '@athoscommerce/snap-toolbox';
import { Snap, SnapConfig, SnapServices } from './Snap';
import { TEMPLATE_EDIT_COOKIE, TEMPLATE_EDITOR_PARAM, SnapTemplatesConfigLocked as SnapIntegrationConfig } from './Templates/SnapTemplates';
import { TemplatesStore } from './Templates/Stores/TemplateStore';

type HybridIntegrationConfig = {
	templatesConfig: SnapIntegrationConfig;
	snapConfig: SnapConfig;
	services?: SnapServices;
};

export class SnapHybrid extends Snap {
	constructor(config: HybridIntegrationConfig) {
		const _templatesConfig = {
			config: config.templatesConfig.config,
			theme: config.templatesConfig.theme,
		};

		const urlParams = url(window.location.href);
		const editMode = Boolean((urlParams?.params?.query && TEMPLATE_EDITOR_PARAM in urlParams.params.query) || cookies.get(TEMPLATE_EDIT_COOKIE));

		const templatesStore = new TemplatesStore({ config: _templatesConfig, settings: { editMode } });

		super(config.snapConfig, { ...config.services, templatesStore });
	}
}
