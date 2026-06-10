import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import { ComponentMap, JSXComponent } from '../types';

export const useComponent = (map: ComponentMap, name?: string): JSXComponent | undefined => {
	const [importedComponent, setImportedComponent] = useState<JSXComponent | undefined>(undefined);

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

		const importFn = map[name];
		if (importFn && typeof importFn === 'function') {
			const componentFn = importFn();
			if (componentFn instanceof Promise) {
				// Guard against stale promises resolving after the effect has moved on.
				componentFn.then((component) => {
					if (!isActive) {
						return;
					}

					setImportedComponent(() => component as JSXComponent);
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

	return importedComponent;
};
