import deepmerge from 'deepmerge';
import { useControllerStorage } from './useControllerStorage';
import { Theme } from '../providers';
import { ToolbarProps } from '../components/Organisms/Toolbar';

export const useLayoutOptions = (props: any, globalTheme: Theme) => {
	const layoutOptions = props?.layoutOptions || [];

	// Note: only store serializable identifiers (value/label) to avoid JSON.stringify failures
	// on option objects that may contain JSX (e.g. icon: { children: <span>...</span> })

	// verify selectedLayout is in layoutOptions - if not set it to the default one
	// Note: JSON.stringify is avoided here because option objects may contain JSX (non-serializable) values
	const isSameOption = (a: any, b: any) => {
		if (!a || !b) return false;
		if (a.value !== undefined && b.value !== undefined) return a.value === b.value;
		if (a.label !== undefined && b.label !== undefined) return a.label === b.label;
		return false;
	};
	const toStorable = (option: any) => (option ? { value: option.value, label: option.label } : option);

	// handle layoutOptions and selected option — store only serializable identifiers
	const [storedSelection, setStoredSelection] = useControllerStorage(
		props.controller,
		'layoutOptions',
		toStorable(layoutOptions.filter((option: any) => option.default).pop())
	);

	// Resolve the stored identifier back to the full option object (which may contain JSX)
	const selectedLayout = layoutOptions.find((option: any) => isSameOption(option, storedSelection));

	// verify storedSelection is in layoutOptions - if not reset to the default
	if (storedSelection && !selectedLayout) {
		setStoredSelection(toStorable(layoutOptions.filter((option: any) => option.default).pop()));
	}

	props.theme = props.theme || {};
	props.theme.components = {
		...(props.theme.components || {}),
		layoutSelector: {
			options: layoutOptions,
			onSelect: (e: any, option: any) => {
				if (option) {
					setStoredSelection(toStorable(option));
				}
			},
			selected: selectedLayout,
		},
	};
	let shouldUseOverrides = false;
	if (globalTheme.components && props.treePath) {
		// pull out the template (top level parent) component from the treePath to use in filtering out globalTheme overrides
		const templateComponent = props.treePath.split(' ')[0];

		// we only want to use overrides if one of the toolbars is actually rendering the layoutSelector
		Object.keys(globalTheme.components).forEach((key) => {
			const paths = key.split(' ');
			const componentTypeAndName = paths.splice(-1).pop() ?? '';
			const [componentType] = componentTypeAndName.split('.');
			if (
				globalTheme.components &&
				componentType == 'toolbar' &&
				(paths[0] == templateComponent ||
					paths[0] == `*${templateComponent}` ||
					paths[0] == `*(M)${templateComponent}` ||
					paths[0] == `*(T)${templateComponent}` ||
					paths[0] == `*(D)${templateComponent}` ||
					paths[0] == `(M)${templateComponent}` ||
					paths[0] == `(T)${templateComponent}` ||
					paths[0] == `(D)${templateComponent}` ||
					!paths.length)
			) {
				const toolbarConfig = globalTheme.components[key as keyof typeof globalTheme.components] as Partial<ToolbarProps>;
				if (toolbarConfig?.layout && toolbarConfig.layout.toString().indexOf('layoutSelector') > -1) {
					shouldUseOverrides = true;
				}
			}
		});
	}

	// grab overrides out of the "selected" or default layoutOptions and merge it in
	if (selectedLayout?.overrides && shouldUseOverrides) {
		props.theme = deepmerge(props.theme, { components: selectedLayout.overrides.components });
	}
};
