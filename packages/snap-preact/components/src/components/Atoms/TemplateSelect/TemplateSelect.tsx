import { h } from 'preact';
import { observer } from 'mobx-react-lite';
import { Controllers } from '@athoscommerce/snap-controller';
import { ThemeProvider, ControllerProvider, SnapProvider, Theme } from '../../../providers';
import type { SnapTemplates } from '../../../../../src';
import type { TemplatesStore, TemplateThemeTypes, TemplateTypes } from '../../../../../src/Templates/Stores/TemplateStore';

export const TemplateSelect = observer((properties: TemplateSelectProps) => {
	const { snap, templatesStore, targetId, type, controller, ...otherProps } = properties;
	const { loading } = templatesStore;
	const targeter = templatesStore.getTarget(type, targetId);
	if (!targeter) {
		controller.log.error(`Target "${targetId}" not found in store for type "${type}"`);
		return null;
	}
	const Component = templatesStore.library.getComponent(type, targeter.component);
	const themeLocation = templatesStore?.themes?.[targeter.theme.location as TemplateThemeTypes];
	const themeStore = themeLocation && themeLocation[targeter.theme.name];
	const theme = themeStore?.theme;

	if (!loading && !theme && !templatesStore.settings?.editMode) {
		const error = `Theme "${targeter.theme.name}" not found in library for target "${targetId}"`;
		controller.log.error(error);
	}

	// ensuring that theme and component are ready to render
	return !loading && theme && Component ? (
		<SnapProvider snap={snap}>
			<ThemeProvider theme={theme}>
				<ControllerProvider controller={controller}>
					<div className={`ss__template-select ss__theme__${theme.name}`}>
						<Component controller={controller} {...otherProps} />
					</div>
				</ControllerProvider>
			</ThemeProvider>
		</SnapProvider>
	) : null;
});
export interface TemplateSelectProps {
	templatesStore: TemplatesStore;
	targetId: string;
	type: TemplateTypes;
	controller: Controllers;
	snap: SnapTemplates;
	theme?: Theme;
}
