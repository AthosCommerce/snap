import { h } from 'preact';
import { render } from '@testing-library/preact';

import type { AbstractController } from '@athoscommerce/snap-controller';
import type { AbstractStore } from '@athoscommerce/snap-store-mobx';

import type { Snap } from '../../../src';
import { ControllerProvider, withController } from './controller';
import { StoreProvider, withStore } from './store';
import { SnapProvider, withSnap } from './snap';
import { TreePathProvider, withTreePath } from './treePath';
import type { JSXComponent } from '../types';

// each wrapped component requires the prop its provider injects - wrapping it must type-check (`npm run typecheck:tests`)
// the HOCs return the wrapped component's own type, so rendering without the injected prop needs the JSXComponent cast

describe('provider HOCs', () => {
	it('withController passes the controller to a component that requires it', () => {
		const controller = { id: 'search' } as AbstractController;
		const Component = withController(({ controller, label }: { controller: AbstractController; label: string }) => (
			<div className="component">{`${label}:${controller.id}`}</div>
		));
		const Rendered = Component as JSXComponent;

		const rendered = render(
			<ControllerProvider controller={controller}>
				<Rendered label="controller" />
			</ControllerProvider>
		);

		expect(rendered.container.querySelector('.component')?.textContent).toBe('controller:search');
	});

	it('withStore passes the store to a component that requires it', () => {
		const store = { loaded: true } as AbstractStore;
		const Component = withStore(({ store, label }: { store: AbstractStore; label: string }) => (
			<div className="component">{`${label}:${store.loaded}`}</div>
		));
		const Rendered = Component as JSXComponent;

		const rendered = render(
			<StoreProvider store={store}>
				<Rendered label="store" />
			</StoreProvider>
		);

		expect(rendered.container.querySelector('.component')?.textContent).toBe('store:true');
	});

	it('withSnap passes the snap instance to a component that requires it', () => {
		const snap = { context: { siteId: 'abc123' } } as unknown as Snap;
		const Component = withSnap(({ snap, label }: { snap: Snap; label: string }) => (
			<div className="component">{`${label}:${snap.context.siteId}`}</div>
		));
		const Rendered = Component as JSXComponent;

		const rendered = render(
			<SnapProvider snap={snap}>
				<Rendered label="snap" />
			</SnapProvider>
		);

		expect(rendered.container.querySelector('.component')?.textContent).toBe('snap:abc123');
	});

	it('withTreePath passes the treePath to a component that requires it', () => {
		const Component = withTreePath(({ treePath, label }: { treePath: string; label: string }) => (
			<div className="component">{`${label}:${treePath}`}</div>
		));
		const Rendered = Component as JSXComponent;

		const rendered = render(
			<TreePathProvider path="search toolbar">
				<Rendered label="treePath" />
			</TreePathProvider>
		);

		expect(rendered.container.querySelector('.component')?.textContent).toBe('treePath:search toolbar');
	});
});
