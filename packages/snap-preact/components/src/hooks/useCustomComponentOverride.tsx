import { h } from 'preact';

import { useSnap } from '../providers';
import { ComponentMap } from '../types';
import { useComponent } from './useComponent';
import type { SnapTemplates } from '../../../src';

type WithCustomComponent = {
	customComponent?: string;
};

export type UseCustomComponentOverrideResult = {
	overrideElement: h.JSX.Element | null;
	shouldRenderDefault: boolean;
	shouldWaitForNamedOverride: boolean;
};

export const useCustomComponentOverride = <TProps extends WithCustomComponent>(
	componentKey: string,
	props: TProps
): UseCustomComponentOverrideResult => {
	const snap = useSnap();
	const map = ((snap as SnapTemplates)?.templates?.library.import.component?.[
		componentKey as keyof SnapTemplates['templates']['library']['import']['component']
	] || {}) as ComponentMap;
	const { customComponent } = props;
	const { ComponentOverride, shouldWaitForNamedOverride } = useComponent(map, customComponent);

	const overrideElement = customComponent && ComponentOverride ? <ComponentOverride {...props} customComponent={undefined} /> : null;

	return {
		overrideElement,
		shouldRenderDefault: !shouldWaitForNamedOverride && !overrideElement,
		shouldWaitForNamedOverride,
	};
};
