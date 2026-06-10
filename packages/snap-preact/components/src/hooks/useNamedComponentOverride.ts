import { ComponentMap, JSXComponent } from '../types';
import { useComponent } from './useComponent';

type UseNamedComponentOverrideResult = {
	ComponentOverride: JSXComponent | undefined;
	shouldWaitForNamedOverride: boolean;
};

export const useNamedComponentOverride = (map: ComponentMap, name?: string): UseNamedComponentOverrideResult => {
	const hasNamedOverride = Boolean(name && map[name]);
	const ComponentOverride = useComponent(map, name);

	return {
		ComponentOverride,
		shouldWaitForNamedOverride: hasNamedOverride && !ComponentOverride,
	};
};
