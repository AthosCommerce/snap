import { useEffect, useState } from 'preact/hooks';

import type { ControllerTypes, ControllerConfigs, Controllers } from '@athoscommerce/snap-controller';
import type { Snap } from '../../../src';

export const useCreateController = <ControllerType extends Controllers>(
	snap: Snap,
	type: keyof typeof ControllerTypes,
	config: ControllerConfigs
): ControllerType => {
	const [controller, setController] = useState<Controllers | undefined>(undefined);

	useEffect(() => {
		// check if the controller already exists, and use that if it does, otherwise create one
		snap
			.getController(config.id)
			.then((controller: Controllers) => {
				setController(controller);
			})
			.catch(async () => {
				let configToCreate = config;

				// dynamically created recommendation controllers (ex. no-results recommendations) don't go through
				// the RecommendationInstantiator, so inherit its plugins/middleware from the original config to keep behavior consistent
				if (type === 'recommendation' && !config.plugins && !config.middleware) {
					try {
						const instantiator = await snap.getInstantiator('recommendation');
						configToCreate = {
							...config,
							plugins: instantiator.config.config.plugins,
							middleware: instantiator.config.config.middleware,
						};
					} catch {
						// no recommendation instantiator configured - proceed without inherited attachments
					}
				}

				try {
					const controller = await snap.createController(type, configToCreate);
					setController(controller);
				} catch (err) {
					// eslint-disable-next-line no-console
					console.error(`useCreateController: failed to create controller "${config.id}"`, err);
				}
			});
	}, []);

	return controller as ControllerType;
};
