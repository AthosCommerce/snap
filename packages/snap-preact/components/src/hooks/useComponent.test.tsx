import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import { render, waitFor } from '@testing-library/preact';

import { ComponentMap, JSXComponent } from '../types';
import { useComponent, UseComponentResult } from './useComponent';

function HookProbe({ map, name, onChange }: { map: ComponentMap; name?: string; onChange: (result: UseComponentResult) => void }) {
	const result = useComponent(map, name);

	useEffect(() => {
		onChange(result);
	}, [result]);

	return null;
}

describe('useComponent', () => {
	it('loads a synchronous component override and does not wait', async () => {
		let latest: UseComponentResult | undefined;
		const SyncComponent: JSXComponent = () => <div data-testid="sync-component">sync</div>;
		const map: ComponentMap = {
			sync: () => SyncComponent,
		};

		render(<HookProbe map={map} name="sync" onChange={(result) => (latest = result)} />);

		await waitFor(() => {
			expect(latest?.ComponentOverride).toBe(SyncComponent);
			expect(latest?.shouldWaitForNamedOverride).toBe(false);
		});
	});

	it('waits while an async override is loading, then resolves', async () => {
		let latest: UseComponentResult | undefined;
		let resolveImport: ((value: JSXComponent) => void) | undefined;
		const AsyncComponent: JSXComponent = () => <div data-testid="async-component">async</div>;
		const map: ComponentMap = {
			async: () =>
				new Promise<JSXComponent>((resolve) => {
					resolveImport = resolve;
				}),
		};

		render(<HookProbe map={map} name="async" onChange={(result) => (latest = result)} />);

		await waitFor(() => {
			expect(latest?.ComponentOverride).toBeUndefined();
			expect(latest?.shouldWaitForNamedOverride).toBe(true);
		});

		resolveImport!(AsyncComponent);

		await waitFor(() => {
			expect(latest?.ComponentOverride).toBe(AsyncComponent);
			expect(latest?.shouldWaitForNamedOverride).toBe(false);
		});
	});

	it('ignores stale async resolution after name changes', async () => {
		let latest: UseComponentResult | undefined;
		let resolveImport: ((value: JSXComponent) => void) | undefined;
		const AsyncComponent: JSXComponent = () => <div data-testid="stale-component">stale</div>;
		const map: ComponentMap = {
			async: () =>
				new Promise<JSXComponent>((resolve) => {
					resolveImport = resolve;
				}),
		};

		const rendered = render(<HookProbe map={map} name="async" onChange={(result) => (latest = result)} />);

		await waitFor(() => {
			expect(latest?.shouldWaitForNamedOverride).toBe(true);
		});

		rendered.rerender(<HookProbe map={map} name={undefined} onChange={(result) => (latest = result)} />);

		await waitFor(() => {
			expect(latest?.ComponentOverride).toBeUndefined();
			expect(latest?.shouldWaitForNamedOverride).toBe(false);
		});

		resolveImport!(AsyncComponent);

		await waitFor(() => {
			expect(latest?.ComponentOverride).toBeUndefined();
			expect(latest?.shouldWaitForNamedOverride).toBe(false);
		});
	});

	it('returns no override and does not wait when component name is missing', async () => {
		let latest: UseComponentResult | undefined;
		const map: ComponentMap = {
			sync: () => (() => null) as JSXComponent,
		};

		render(<HookProbe map={map} name={undefined} onChange={(result) => (latest = result)} />);

		await waitFor(() => {
			expect(latest?.ComponentOverride).toBeUndefined();
			expect(latest?.shouldWaitForNamedOverride).toBe(false);
		});
	});

	it('warns and does not wait when a named override is not found', async () => {
		const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
		let latest: UseComponentResult | undefined;
		const map: ComponentMap = {};

		render(<HookProbe map={map} name="missing" onChange={(result) => (latest = result)} />);

		await waitFor(() => {
			expect(latest?.ComponentOverride).toBeUndefined();
			expect(latest?.shouldWaitForNamedOverride).toBe(false);
			expect(warnSpy).toHaveBeenCalledWith('Component "missing" not found in component map.');
		});

		warnSpy.mockRestore();
	});
});
