import { SearchController } from '@athoscommerce/snap-controller';
import { AbstractionGroup } from '../../../../types';
import { TemplateEditorStore } from '../TemplateEditorStore';

export function searchTargetUI(store: TemplateEditorStore): AbstractionGroup<number>[] {
	return [
		{
			// title: 'Search',
			description: '',
			collapsible: true,
			controls: [
				{
					type: 'dropdown',
					label: 'Component',
					description: 'Template component to render',
					getValue: (index) => {
						// all search targeters are in store.templatesStore.targets.search

						// TODO: need to handle case where there are no targets
						const targetAtIndex = store.templatesStore.targets?.search[index as number];
						return targetAtIndex?.component;
					},
					getOptions: () => {
						// return list of available templates
						const templateList = Object.keys(store.templatesStore.library.components.search).map((name) => ({ value: name }));
						return [{ options: templateList }];
					},
					shouldShowReset: (index) => {
						// if the override differs from the initial state, show reset
						const initialTargetAtIndex = store.initial.targets?.search?.[index as number];
						const overrideTargetAtIndex = store.overrides.targets?.search?.[index as number];
						return (
							Boolean(initialTargetAtIndex?.component) &&
							Boolean(overrideTargetAtIndex?.component) &&
							initialTargetAtIndex.component != overrideTargetAtIndex.component
						);
					},
					onValueChange: (value, index) => {
						store.setTargetOverride({ path: ['search', `[${index}]`, 'component'], value: value as string });
					},
					onReset: (index) => {
						store.setTargetOverride({ path: ['search', `[${index}]`, 'component'], value: undefined });
					},
				},
				// {
				// 	type: 'dropdown',
				// 	label: 'Result Component',
				// 	description: 'Template component to render',
				// 	getValue: (index) => {
				// 		// all search targeters are in store.templatesStore.targets.search

				// 		// TODO: need to handle case where there are no targets
				// 		const targetAtIndex = store.templatesStore.targets?.search[index as number];
				// 		return targetAtIndex?.resultComponent;
				// 	},
				// 	getOptions: () => {
				// 		// return list of available templates
				// 		const templateList = Object.keys(store.templatesStore.library.components.result).map((name) => ({ value: name }));
				// 		return [{ options: templateList }];
				// 	},
				// 	shouldShowReset: (index) => {
				// 		// if the override differs from the initial state, show reset
				// 		const initialTargetAtIndex = store.initial.targets?.search?.[index as number];
				// 		const overrideTargetAtIndex = store.overrides.targets?.search?.[index as number];
				// 		return initialTargetAtIndex && overrideTargetAtIndex && initialTargetAtIndex.resultComponent != overrideTargetAtIndex.resultComponent;
				// 	},
				// 	onValueChange: (value, index) => {
				// 		store.setTargetOverride({ path: ['search', `[${index}]`, 'resultComponent'], value: value as string });
				// 	},
				// 	onReset: (index) => {
				// 		store.setTargetOverride({ path: ['search', `[${index}]`, 'resultComponent'], value: undefined });

				// 		// if no initial value
				// 		const initialTargetAtIndex = store.initial.targets?.search?.[index as number];

				// 		if (!initialTargetAtIndex.resultComponent) {
				// 			const targetAtIndex = store.templatesStore.targets?.search[index as number];
				// 			targetAtIndex?.setValue('resultComponent', 'Result');
				// 		}
				// 	},
				// },
			],
		},
	];
}

export function searchControllerUI(store: TemplateEditorStore): AbstractionGroup<SearchController>[] {
	return [
		{
			title: 'Result Display Options',
			description: '',
			collapsible: true,
			controls: [
				{
					type: 'checkbox',
					label: 'Infinite Scroll',
					description: 'Enable infinite scroll',
					getValue: (controller) => {
						// need to support both infinite without "enabled" (object simply exists) and with "enabled" in settings
						if (controller?.store.config.settings?.infinite) {
							if (controller.store.config.settings?.infinite?.enabled !== undefined) {
								return controller.store.config.settings.infinite.enabled;
							}
							return true;
						}
						return false;
					},
					shouldShowReset: () => {
						// if the override differs from the initial state, show reset
						const initialConfig = store.initial.controller.search?.infinite;
						const initialEnabled = Boolean(initialConfig?.enabled !== undefined ? initialConfig.enabled : initialConfig);
						const overrideEnabled = Boolean(store.overrides.controller.search?.infinite?.enabled !== undefined);
						return overrideEnabled && initialEnabled !== store.overrides.controller.search?.infinite?.enabled;
					},
					onValueChange: (value, controller) => {
						if (typeof value === 'undefined' || !controller) return;

						const initialConfig = store.initial.controller.search?.infinite;

						if (value == initialConfig?.enabled || (value === false && !initialConfig)) {
							store.setControllerOverride({ path: ['infinite'], controller });
						} else {
							store.setControllerOverride({ path: ['infinite', 'enabled'], value: Boolean(value), controller });
						}
					},
					onReset: (controller) => {
						if (!controller) return;

						store.setControllerOverride({ path: ['infinite'], controller });
					},
				},
			],
		},
	];
}
