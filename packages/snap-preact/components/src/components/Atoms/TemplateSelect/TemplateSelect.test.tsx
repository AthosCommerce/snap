import { h } from 'preact';
import { render } from '@testing-library/preact';
import { ControllerTypes } from '@athoscommerce/snap-controller';
import { TemplateSelect } from './TemplateSelect';

// regression test for a bug where recommendation components (which have no tabManager) always
// received an explicit `name: undefined` prop from TemplateSelect. Since object spread copies a
// key even when its value is undefined, this clobbered the `name` default that recommendation
// templates compute from `controller.store.profile.tag` (e.g. `{ name: profile.tag, ...properties }`).
describe('TemplateSelect', () => {
	let receivedProps: Record<string, any>[];

	const SpyComponent = (props: Record<string, any>) => {
		receivedProps.push(props);
		return <div className="spy" />;
	};

	beforeEach(() => {
		receivedProps = [];
	});

	const theme = { global: { myTheme: { theme: {} } } };

	const makeTemplatesStore = (getTabManager: () => any) =>
		({
			loading: false,
			library: { getComponent: () => SpyComponent },
			themes: theme,
			settings: {},
			getTabManager,
		} as any);

	const target = {
		type: 'recommendation',
		component: 'Grid',
		theme: { location: 'global', name: 'myTheme' },
		selector: '#target',
	} as any;

	const snap = { controllers: {} } as any;

	it('does not pass a `name` prop when there is no tabManager and none was provided', () => {
		const templatesStore = makeTemplatesStore(() => undefined);
		const controller = { type: ControllerTypes.recommendation, log: { error: jest.fn() } } as any;

		render(<TemplateSelect snap={snap} templatesStore={templatesStore} target={target} controller={controller} />);

		expect(receivedProps[0]).not.toHaveProperty('name');
	});

	it('forwards an explicitly provided `name` prop through when there is no tabManager', () => {
		const templatesStore = makeTemplatesStore(() => undefined);
		const controller = { type: ControllerTypes.recommendation, log: { error: jest.fn() } } as any;

		const props = { snap, templatesStore, target, controller, name: 'trending' } as any;
		render(<TemplateSelect {...props} />);

		expect(receivedProps[0].name).toBe('trending');
	});

	it('defaults `name` to the active tab id when a tabManager is present', () => {
		const templatesStore = makeTemplatesStore(() => ({ active: { id: 'TabOne' } }));
		const controller = { type: ControllerTypes.search, log: { error: jest.fn() } } as any;

		render(<TemplateSelect snap={snap} templatesStore={templatesStore} target={target} controller={controller} />);

		expect(receivedProps[0].name).toBe('tabone');
	});
});
