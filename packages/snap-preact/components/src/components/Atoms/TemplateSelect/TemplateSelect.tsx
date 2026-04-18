import { h } from 'preact';
import { observer } from 'mobx-react-lite';
import { Controllers } from '@athoscommerce/snap-controller';
import { ThemeProvider, ControllerProvider, SnapProvider, Theme } from '../../../providers';
import type { SnapTemplates } from '../../../../../src';
import type { TemplatesStore, TemplateThemeTypes } from '../../../../../src/Templates/Stores/TemplateStore';
import { TargetStore } from '../../../../../src/Templates/Stores/TargetStore';

export const TemplateSelect = observer((properties: TemplateSelectProps) => {
	const { snap, templatesStore, target, controller, ...otherProps } = properties;
	const { loading } = templatesStore;

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
	target: TargetStore;
	controller: Controllers;
	snap: SnapTemplates;
	theme?: Theme;
}
