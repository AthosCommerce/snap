import { h } from 'preact';
import { useRef } from 'preact/hooks';
import { observer } from 'mobx-react-lite';
import { Controllers, ControllerTypes, AbstractController } from '@athoscommerce/snap-controller';
import { TabManagerStore } from '../../../../../src/Templates/Stores/TabManagerStore';
import { ThemeProvider, ControllerProvider, SnapProvider, Theme } from '../../../providers';
import type { SnapTemplates } from '../../../../../src';
import type { TemplatesStore, TemplateThemeTypes } from '../../../../../src/Templates/Stores/TemplateStore';
import { TargetStore } from '../../../../../src/Templates/Stores/TargetStore';

export const TemplateSelect = observer((properties: TemplateSelectProps) => {
	const { snap, templatesStore, target, controller, ...otherProps } = properties;
	const { loading } = templatesStore;
	const tabManagerRef = useRef<TabManagerStore | undefined>(undefined);

	if (!target) {
		controller.log.error(`Target was not provided!`);
		return null;
	}

	const Component = templatesStore.library.getComponent(target.type, target.component);
	const themeLocation = templatesStore?.themes?.[target.theme.location as TemplateThemeTypes];
	const themeStore = themeLocation && themeLocation[target.theme.name];
	const theme = themeStore?.theme;

	if (!loading && !theme && !templatesStore.settings?.editMode) {
		const error = `Theme "${target.theme.name}" not found in library for target "${target.selector}"`;
		controller.log.error(error);
	}

	let tabManager;
	// are there tabs?
	if (controller.type !== ControllerTypes.finder && controller.type !== ControllerTypes.recommendation) {
		const tabs = snap.templates.config[controller.type]?.tabs;
		if (tabs && tabs.length > 1) {
			// the constructor subscribes to the urlManager and kicks off searches, so it must only run once per mount
			if (!tabManagerRef.current) {
				const controllers: AbstractController[] = [];
				tabs.forEach((tab) => {
					controllers.push(snap.controllers[tab.id]);
				});

				tabManagerRef.current = new TabManagerStore(tabs, controllers, snap.templates.config.tabsConfig);
			}

			tabManager = tabManagerRef.current;
		}
	}

	// ensuring that theme and component are ready to render
	return !loading && theme && Component ? (
		<SnapProvider snap={snap}>
			<ThemeProvider theme={theme}>
				<ControllerProvider controller={controller}>
					<div className="ss__template-select">
						<Component
							controller={controller}
							tabManager={tabManager}
							name={tabManager?.active?.id ? tabManager?.active?.id.toLowerCase() : undefined}
							{...otherProps}
						/>
					</div>
				</ControllerProvider>
			</ThemeProvider>
		</SnapProvider>
	) : null;
});
export interface TemplateSelectProps {
	templatesStore: TemplatesStore;
	target: TargetStore;
	controller: Controllers;
	snap: SnapTemplates;
	theme?: Theme;
}
