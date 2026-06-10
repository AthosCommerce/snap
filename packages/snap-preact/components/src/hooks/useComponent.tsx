import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import { ComponentMap, JSXComponent } from '../types';

export const useComponent = (map: ComponentMap, name: string): JSXComponent | undefined => {
	const [importedComponent, setImportedComponent] = useState<JSXComponent | undefined>(undefined);

	useEffect(() => {
		// No component requested — quietly do nothing (callers may pass '' to keep hook order stable).
		if (!name) return;
		const importFn = map[name];
		if (importFn && typeof importFn === 'function') {
			const componentFn = importFn();
			if (componentFn instanceof Promise) {
				componentFn.then((component) => {
					setImportedComponent(() => component as JSXComponent);
				});
			} else {
				setImportedComponent(() => componentFn as JSXComponent);
			}
		} else {
			console.warn(`Component "${name}" not found in component map.`);
		}
	}, []);

	return importedComponent;
};
