import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import { ComponentMap, JSXComponent } from '../types';

export type UseComponentResult = {
	ComponentOverride: JSXComponent | undefined;
	shouldWaitForNamedOverride: boolean;
};

export const useComponent = (map: ComponentMap, name?: string): UseComponentResult => {
	const [importedComponent, setImportedComponent] = useState<JSXComponent | undefined>(undefined);
	const [importFailed, setImportFailed] = useState(false);

	useEffect(() => {
		// This flag belongs to one specific effect run.
		// Cleanup flips it so any async work from that run can no longer update state.
		let isActive = true;

		if (!name) {
			// Clear the current component when nothing is selected.
			setImportedComponent(undefined);
			return () => {
				isActive = false;
			};
		}

		setImportFailed(false);

		const importFn = map[name];
		if (importFn && typeof importFn === 'function') {
			const componentFn = importFn();
			if (componentFn instanceof Promise) {
				// Guard against stale promises resolving after the effect has moved on.
				componentFn
					.then((component) => {
						if (!isActive) {
							return;
						}

						setImportedComponent(() => component as JSXComponent);
					})
					.catch((error) => {
						if (!isActive) {
							return;
						}
						setImportFailed(true);
						setImportedComponent(undefined);
						console.warn(`Failed to load component "${name}".`, error);
					});
			} else {
				// Synchronous resolution can update immediately as long as this effect is still current.
				if (isActive) {
					setImportedComponent(() => componentFn as JSXComponent);
				}
			}
		} else {
			// Missing map entries intentionally clear the component and warn for easier debugging.
			setImportedComponent(undefined);
			console.warn(`Component "${name}" not found in component map.`);
		}

		// Cleanup runs before the next effect invocation and on unmount.
		return () => {
			isActive = false;
		};
	}, [map, name]);

	const hasNamedOverride = Boolean(name && map[name]);

	return {
		ComponentOverride: importedComponent,
		shouldWaitForNamedOverride: hasNamedOverride && !importedComponent && !importFailed,
	};
};
