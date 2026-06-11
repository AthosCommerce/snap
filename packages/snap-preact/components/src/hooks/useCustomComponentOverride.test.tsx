import { h } from 'preact';
import { render, waitFor } from '@testing-library/preact';

import { SnapProvider } from '../providers';
import { useCustomComponentOverride } from './useCustomComponentOverride';

type ProbeProps = {
	componentKey: string;
	customComponent?: string;
};

const Probe = ({ componentKey, customComponent }: ProbeProps) => {
	const { overrideElement, shouldRenderDefault } = useCustomComponentOverride(componentKey, {
		customComponent,
		label: 'test',
	});

	if (shouldRenderDefault) {
		return <div data-testid="default">default</div>;
	}

	return <>{overrideElement}</>;
};

describe('useCustomComponentOverride', () => {
	it('renders default path when no custom component name is provided', () => {
		const rendered = render(<Probe componentKey="sortBy" />);
		expect(rendered.getByTestId('default')).toBeInTheDocument();
	});

	it('waits while async override is loading, then renders override with customComponent cleared', async () => {
		let resolveImport: ((value: any) => void) | undefined;
		const snap = {
			templates: {
				library: {
					import: {
						component: {
							sortBy: {
								AsyncOverride: () =>
									new Promise((resolve) => {
										resolveImport = resolve;
									}),
							},
						},
					},
				},
			},
		} as any;

		const rendered = render(
			<SnapProvider snap={snap}>
				<Probe componentKey="sortBy" customComponent="AsyncOverride" />
			</SnapProvider>
		);

		expect(rendered.queryByTestId('default')).not.toBeInTheDocument();
		expect(rendered.queryByTestId('override')).not.toBeInTheDocument();

		resolveImport!((props: any) => <div data-testid="override">{String(props.customComponent === undefined)}</div>);

		await waitFor(() => {
			expect(rendered.getByTestId('override')).toBeInTheDocument();
			expect(rendered.getByTestId('override')).toHaveTextContent('true');
		});
	});

	it('falls back to default when named override does not exist in map', async () => {
		const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
		const rendered = render(<Probe componentKey="sortBy" customComponent="MissingOverride" />);

		await waitFor(() => {
			expect(rendered.getByTestId('default')).toBeInTheDocument();
		});

		expect(warnSpy).toHaveBeenCalledWith('Component "MissingOverride" not found in component map.');
		warnSpy.mockRestore();
	});
});
