import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import { render, waitFor } from '@testing-library/preact';

import { useCreateController } from './useCreateController';

import type { Controllers, ControllerConfigs } from '@athoscommerce/snap-controller';
import type { Snap } from '../../../src';

function HookProbe({
	snap,
	type,
	config,
	onChange,
}: {
	snap: Snap;
	type: 'search' | 'autocomplete' | 'finder' | 'recommendation';
	config: ControllerConfigs;
	onChange: (controller: Controllers | undefined) => void;
}) {
	const controller = useCreateController(snap, type, config);

	useEffect(() => {
		onChange(controller);
	}, [controller]);

	return null;
}

function createMockSnap(overrides: { getInstantiator?: jest.Mock; createController?: jest.Mock }): Snap {
	return {
		getController: jest.fn().mockRejectedValue(undefined),
		getInstantiator: overrides.getInstantiator || jest.fn().mockRejectedValue(undefined),
		createController: overrides.createController || jest.fn().mockResolvedValue({ id: 'created' } as unknown as Controllers),
	} as unknown as Snap;
}

describe('useCreateController', () => {
	it('creates a controller without inherited attachments when no recommendation instantiator exists', async () => {
		const createController = jest.fn().mockResolvedValue({ id: 'no-results' } as unknown as Controllers);
		const snap = createMockSnap({ createController });

		render(<HookProbe snap={snap} type="recommendation" config={{ id: 'no-results', tag: 'no-results' } as ControllerConfigs} onChange={() => {}} />);

		await waitFor(() => {
			expect(createController).toHaveBeenCalledWith('recommendation', { id: 'no-results', tag: 'no-results' });
		});
	});

	it('inherits plugins/middleware from the recommendation instantiator config when creating a dynamic recommendation controller', async () => {
		const plugins = [[jest.fn(), {}]];
		const middleware = { 'controller/search': jest.fn() };
		const getInstantiator = jest.fn().mockResolvedValue({
			config: { config: { plugins, middleware } },
		});
		const createController = jest.fn().mockResolvedValue({ id: 'no-results' } as unknown as Controllers);
		const snap = createMockSnap({ getInstantiator, createController });

		render(<HookProbe snap={snap} type="recommendation" config={{ id: 'no-results', tag: 'no-results' } as ControllerConfigs} onChange={() => {}} />);

		await waitFor(() => {
			expect(createController).toHaveBeenCalledWith('recommendation', { id: 'no-results', tag: 'no-results', plugins, middleware });
		});
	});

	it('does not override plugins/middleware already present on the config', async () => {
		const explicitPlugins = [[jest.fn(), {}]];
		const getInstantiator = jest.fn().mockResolvedValue({
			config: { config: { plugins: [[jest.fn(), {}]], middleware: {} } },
		});
		const createController = jest.fn().mockResolvedValue({ id: 'no-results' } as unknown as Controllers);
		const snap = createMockSnap({ getInstantiator, createController });

		render(
			<HookProbe
				snap={snap}
				type="recommendation"
				config={{ id: 'no-results', tag: 'no-results', plugins: explicitPlugins } as ControllerConfigs}
				onChange={() => {}}
			/>
		);

		await waitFor(() => {
			expect(createController).toHaveBeenCalledWith('recommendation', { id: 'no-results', tag: 'no-results', plugins: explicitPlugins });
		});
		expect(getInstantiator).not.toHaveBeenCalled();
	});

	it('does not attempt to inherit attachments for non-recommendation controller types', async () => {
		const getInstantiator = jest.fn();
		const createController = jest.fn().mockResolvedValue({ id: 'search' } as unknown as Controllers);
		const snap = createMockSnap({ getInstantiator, createController });

		render(<HookProbe snap={snap} type="search" config={{ id: 'search' } as ControllerConfigs} onChange={() => {}} />);

		await waitFor(() => {
			expect(createController).toHaveBeenCalledWith('search', { id: 'search' });
		});
		expect(getInstantiator).not.toHaveBeenCalled();
	});
});
