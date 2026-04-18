import { AutocompleteController } from '@athoscommerce/snap-controller';
import { AbstractionGroup } from '../../../../types';
import { TemplateEditorStore } from '../TemplateEditorStore';

export function autocompleteTargetUI(store: TemplateEditorStore): AbstractionGroup<number>[] {
	return [
		{
			// title: 'Autocomplete',
			description: '',
			collapsible: true,
			controls: [
				{
					type: 'dropdown',
					label: 'Component',
					description: 'Template component to render',
					getValue: (index) => {
						// all autocomplete targeters are in store.templatesStore.targets.autocomplete

						// TODO: need to handle case where there are no targets
						const targetAtIndex = store.templatesStore.targets?.autocomplete[index as number];
						return targetAtIndex?.component;
					},
					getOptions: () => {
						// return list of available templates
						const templateList = Object.keys(store.templatesStore.library.components.autocomplete).map((name) => ({ value: name }));
						return [{ options: templateList }];
					},
					shouldShowReset: (index) => {
						// if the override differs from the initial state, show reset
						const initialTargetAtIndex = store.initial.targets?.autocomplete?.[index as number];
						const overrideTargetAtIndex = store.overrides.targets?.autocomplete?.[index as number];
						return (
							Boolean(initialTargetAtIndex?.component) &&
							Boolean(overrideTargetAtIndex?.component) &&
							initialTargetAtIndex.component != overrideTargetAtIndex.component
						);
					},
					onValueChange: (value, index) => {
						store.setTargetOverride({ path: ['autocomplete', `[${index}]`, 'component'], value: value as string });
					},
					onReset: (index) => {
						store.setTargetOverride({ path: ['autocomplete', `[${index}]`, 'component'], value: undefined });
					},
				},
				// {
				// 	type: 'dropdown',
				// 	label: 'Result Component',
				// 	description: 'Template component to render',
				// 	getValue: (index) => {
				// 		// all autocomplete targeters are in store.templatesStore.targets.autocomplete

				// 		// TODO: need to handle case where there are no targets
				// 		const targetAtIndex = store.templatesStore.targets?.autocomplete[index as number];
				// 		return targetAtIndex?.resultComponent;
				// 	},
				// 	getOptions: () => {
				// 		// return list of available templates
				// 		const templateList = Object.keys(store.templatesStore.library.components.result).map((name) => ({ value: name }));
				// 		return [{ options: templateList }];
				// 	},
				// 	shouldShowReset: (index) => {
				// 		// if the override differs from the initial state, show reset
				// 		const initialTargetAtIndex = store.initial.targets?.autocomplete?.[index as number];
				// 		const overrideTargetAtIndex = store.overrides.targets?.autocomplete?.[index as number];
				// 		return initialTargetAtIndex && overrideTargetAtIndex && initialTargetAtIndex.resultComponent != overrideTargetAtIndex.resultComponent;
				// 	},
				// 	onValueChange: (value, index) => {
				// 		store.setTargetOverride({ path: ['autocomplete', `[${index}]`, 'resultComponent'], value: value as string });
				// 	},
				// 	onReset: (index) => {
				// 		store.setTargetOverride({ path: ['autocomplete', `[${index}]`, 'resultComponent'], value: undefined });

				// 		// if no initial value
				// 		const initialTargetAtIndex = store.initial.targets?.autocomplete?.[index as number];

				// 		if (!initialTargetAtIndex.resultComponent) {
				// 			const targetAtIndex = store.templatesStore.targets?.autocomplete[index as number];
				// 			targetAtIndex?.setValue('resultComponent', 'Result');
				// 		}
				// 	},
				// },
			],
		},
	];
}

export function autocompleteControllerUI(store: TemplateEditorStore): AbstractionGroup<AutocompleteController>[] {
	return [
		{
			title: 'Terms',
			description: '',
			controls: [
				{
					type: 'dropdown',
					label: 'History Terms',
					description: '',
					getOptions: () => [
						{
							options: [
								{ value: 'Disabled' },
								{ value: 1 },
								{ value: 2 },
								{ value: 3 },
								{ value: 4 },
								{ value: 5 },
								{ value: 6 },
								{ value: 7 },
								{ value: 8 },
								{ value: 9 },
								{ value: 10 },
							],
						},
					],
					getValue: (controller) => {
						return controller?.store.config.settings?.history?.enabled ? controller.store.config.settings.history.limit ?? 'Disabled' : 'Disabled';
					},
					shouldShowReset: () => {
						const initialConfig = store.initial.controller.autocomplete?.history;
						const initialEnabled = Boolean(
							initialConfig?.enabled !== undefined ? initialConfig.enabled : initialConfig?.limit && initialConfig.limit > 0
						);
						const overrideConfig = store.overrides.controller.autocomplete?.history;
						const overrideEnabled = Boolean(overrideConfig?.enabled !== undefined);

						return overrideEnabled && (initialEnabled !== overrideEnabled || initialConfig?.limit !== overrideConfig?.limit);
					},
					onValueChange: (value, controller) => {
						if (typeof value === 'undefined' || !controller) return;

						const initialConfig = store.initial.controller.autocomplete?.history;
						const initialValue = initialConfig?.enabled ? initialConfig?.limit : 'Disabled';

						if (value === initialValue) {
							store.setControllerOverride({ path: ['history'], controller });
						} else if (value === 'Disabled') {
							store.setControllerOverride({ path: ['history'], value: { enabled: false, limit: undefined, showResults: undefined }, controller });
						} else {
							store.setControllerOverride({ path: ['history'], value: { enabled: true, limit: Number(value) }, controller });
						}

						updateAutocompleteControllerState(controller);
					},
					onReset: (controller) => {
						if (!controller) return;

						store.setControllerOverride({ path: ['history'], controller });
						updateAutocompleteControllerState(controller);
					},
				},
				{
					type: 'dropdown',
					label: 'Trending Terms',
					description: '',
					getOptions: () => [
						{
							options: [
								{ value: 'Disabled' },
								{ value: 1 },
								{ value: 2 },
								{ value: 3 },
								{ value: 4 },
								{ value: 5 },
								{ value: 6 },
								{ value: 7 },
								{ value: 8 },
								{ value: 9 },
								{ value: 10 },
							],
						},
					],
					getValue: (controller) => {
						return controller?.store.config.settings?.trending?.enabled ? controller.store.config.settings.trending.limit ?? 'Disabled' : 'Disabled';
					},
					shouldShowReset: () => {
						const initialConfig = store.initial.controller.autocomplete?.trending;
						const initialEnabled = Boolean(
							initialConfig?.enabled !== undefined ? initialConfig.enabled : initialConfig?.limit && initialConfig.limit > 0
						);
						const overrideConfig = store.overrides.controller.autocomplete?.trending;
						const overrideEnabled = Boolean(overrideConfig?.enabled !== undefined);

						return overrideEnabled && (initialEnabled !== overrideEnabled || initialConfig?.limit !== overrideConfig?.limit);
					},
					onValueChange: async (value, controller) => {
						if (typeof value === 'undefined' || !controller) return;

						const initialConfig = store.initial.controller.autocomplete?.trending;
						const initialValue = initialConfig?.enabled ? initialConfig?.limit : 'Disabled';

						if (value === initialValue) {
							store.setControllerOverride({ path: ['trending'], controller });
						} else if (value === 'Disabled') {
							store.setControllerOverride({ path: ['trending'], value: { enabled: false, limit: undefined, showResults: undefined }, controller });
						} else {
							store.setControllerOverride({ path: ['trending'], value: { enabled: true, limit: Number(value) }, controller });
						}

						updateAutocompleteControllerState(controller);
					},
					onReset: (controller) => {
						if (!controller) return;

						store.setControllerOverride({ path: ['trending'], controller });
						updateAutocompleteControllerState(controller);
					},
				},
				{
					type: 'dropdown',
					label: 'Initial Results',
					description: '',
					getDisplayState: (controller) => {
						const enabled = controller?.store.config.settings?.history?.enabled || controller?.store.config.settings?.trending?.enabled;
						return enabled ? 'visible' : 'disabled';
					},
					getOptions: (controller) => {
						const historyEnabled = controller?.store.config.settings?.history?.enabled;
						const trendingEnabled = controller?.store.config.settings?.trending?.enabled;

						const opts = [{ value: 'Disabled' }];
						if (historyEnabled) opts.push({ value: 'History' });
						if (trendingEnabled) opts.push({ value: 'Trending' });
						return [{ options: opts }];
					},
					getValue: (controller) => {
						// controller can have both history and trending enabled - in that case we prioritize showing 'Trending'

						const historyEnabled = controller?.store.config.settings?.history?.enabled;
						const trendingEnabled = controller?.store.config.settings?.trending?.enabled;

						if (trendingEnabled && controller?.store.config.settings?.trending?.showResults) return 'Trending';
						if (historyEnabled && controller?.store.config.settings?.history?.showResults) return 'History';
						return 'Disabled';
					},
					shouldShowReset: () => {
						const initialConfig = store.initial.controller.autocomplete;
						const initialHistoryShowResults = initialConfig?.history?.enabled && initialConfig?.history?.showResults;
						const initialTrendingShowResults = initialConfig?.trending?.enabled && initialConfig?.trending?.showResults;
						const initialValue = initialTrendingShowResults ? 'Trending' : initialHistoryShowResults ? 'History' : 'Disabled';

						const overrideConfig = store.overrides.controller.autocomplete;
						const overrideHistoryShowResults = overrideConfig?.history?.enabled !== false && overrideConfig?.history?.showResults;
						const overrideTrendingShowResults = overrideConfig?.trending?.enabled !== false && overrideConfig?.trending?.showResults;
						const bothOverriddenToDisabled =
							overrideConfig?.history?.showResults === false &&
							overrideConfig?.trending?.showResults === false &&
							(initialHistoryShowResults || initialTrendingShowResults);
						const overrideValue = bothOverriddenToDisabled
							? 'Disabled'
							: overrideTrendingShowResults
							? 'Trending'
							: overrideHistoryShowResults
							? 'History'
							: undefined;

						return overrideValue !== undefined && initialValue !== overrideValue;
					},
					onValueChange: (value, controller) => {
						if (typeof value === 'undefined' || !controller) return;

						store.setControllerOverride({ path: ['history', 'showResults'], value: value === 'History', controller });

						store.setControllerOverride({ path: ['trending', 'showResults'], value: value === 'Trending', controller });

						updateAutocompleteControllerState(controller);
					},
					onReset: (controller) => {
						if (!controller) return;

						store.setControllerOverride({ path: ['history', 'showResults'], controller });
						store.setControllerOverride({ path: ['trending', 'showResults'], controller });
						updateAutocompleteControllerState(controller);
					},
				},
			],
		},
	];
}

export async function updateAutocompleteControllerState(controller: AutocompleteController) {
	controller.reset();
	controller.store.initHistory();

	const trendingResultsEnabled =
		controller.config.settings?.trending?.enabled ||
		(controller.config.settings?.trending && controller.config.settings?.trending?.enabled == undefined);
	const historyResultsEnabled =
		controller.config.settings?.history?.enabled ||
		(controller.config.settings?.history && controller.config.settings?.history?.enabled == undefined);

	if (trendingResultsEnabled) {
		await controller.searchTrending({ limit: controller.config.settings?.trending?.limit });
		controller.config.settings?.trending?.showResults &&
			controller.store.trending.length &&
			!controller.store.results &&
			controller.store.trending[0].preview();
	} else {
		controller.store.updateTrendingTerms({ trending: { queries: [] } });
	}

	if (!trendingResultsEnabled && historyResultsEnabled) {
		controller.config.settings?.history?.showResults &&
			controller.store.history.length &&
			!controller.store.results &&
			controller.store.history[0].preview();
	}
}
