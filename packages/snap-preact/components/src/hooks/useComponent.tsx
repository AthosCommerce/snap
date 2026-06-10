import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import { ComponentMap, JSXComponent } from '../types';

export const useComponent = (map: ComponentMap, name?: string): JSXComponent | undefined => {
	const [importedComponent, setImportedComponent] = useState<JSXComponent | undefined>(undefined);

	useEffect(() => {
		let isActive = true;

		if (!name) {
			setImportedComponent(undefined);
			return () => {
				isActive = false;
			};
		}

		const importFn = map[name];
		if (importFn && typeof importFn === 'function') {
			const componentFn = importFn();
			if (componentFn instanceof Promise) {
				componentFn.then((component) => {
					if (!isActive) {
						return;
					}

					setImportedComponent(() => component as JSXComponent);
				});
			} else {
				if (isActive) {
					setImportedComponent(() => componentFn as JSXComponent);
				}
			}
		} else {
			setImportedComponent(undefined);
			console.warn(`Component "${name}" not found in component map.`);
		}

		return () => {
			isActive = false;
		};
	}, [map, name]);

	return importedComponent;
};
