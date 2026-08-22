import { h } from 'preact';
import { observer } from 'mobx-react-lite';
import { Controllers, ControllerTypes } from '@athoscommerce/snap-controller';
import { ThemeProvider, ControllerProvider, SnapProvider, Theme } from '../../../providers';
import type { SnapTemplates } from '../../../../../src';
import type { TemplatesStore, TemplateThemeTypes } from '../../../../../src/Templates/Stores/TemplateStore';
import { TargetStore } from '../../../../../src/Templates/Stores/TargetStore';

export const TemplateSelect = observer((properties: TemplateSelectProps) => {
	const { snap, templatesStore, target, controller, ...otherProps } = properties;
	const { loading } = templatesStore;

	if (!target) {
		// Quickview targets render without a controller (the quickview manager is not one), so
		// fall back to the console when there is no controller logger to use.
		controller ? controller.log.error(`Target was not provided!`) : console.error(`[TemplateSelect] Target was not provided!`);
		return null;
	}

	const Component = templatesStore.library.getComponent(target.type, target.component);
	const themeLocation = templatesStore?.themes?.[target.theme.location as TemplateThemeTypes];
	const themeStore = themeLocation && themeLocation[target.theme.name];
	const theme = themeStore?.theme;

	if (!loading && !theme && !templatesStore.settings?.editMode) {
		const error = `Theme "${target.theme.name}" not found in library for target "${target.selector}"`;
		controller ? controller.log.error(error) : console.error(`[TemplateSelect] ${error}`);
	}

	const tabManager =
		controller?.type === ControllerTypes.search || controller?.type === ControllerTypes.autocomplete
			? templatesStore.getTabManager(controller.type, snap.controllers)
			: undefined;

	// ensuring that theme and component are ready to render
	if (loading || !theme || !Component) {
		return null;
	}

	// Quickview targets render without a controller — the shared quickview manager arrives via
	// `otherProps` instead — so the ControllerProvider is only wrapped when there is one to provide.
	const content = (
		<div className="ss__template-select">
			<Component
				controller={controller}
				tabManager={tabManager}
				name={tabManager?.active?.id ? tabManager?.active?.id.toLowerCase() : undefined}
				{...otherProps}
			/>
		</div>
	);

	return (
		<SnapProvider snap={snap}>
			<ThemeProvider theme={theme}>{controller ? <ControllerProvider controller={controller}>{content}</ControllerProvider> : content}</ThemeProvider>
		</SnapProvider>
	);
});
export interface TemplateSelectProps {
	templatesStore: TemplatesStore;
	target: TargetStore;
	controller?: Controllers;
	snap: SnapTemplates;
	theme?: Theme;
}
