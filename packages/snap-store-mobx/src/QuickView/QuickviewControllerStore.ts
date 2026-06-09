import { makeObservable, observable } from 'mobx';
import { AbstractStore } from '../Abstract/AbstractStore';
import { QuickviewStore } from './QuickviewStore';
import { MetaStore } from '../Meta/MetaStore';
import type { QuickviewControllerStoreConfig } from '../types';

export class QuickviewControllerStore extends AbstractStore<QuickviewControllerStoreConfig> {
	public quickview: QuickviewStore;
	// Forwarded from the originating controller's store so badge/facet-label consumers
	// (OverlayBadge, attribute facet labels) can read `store.meta` off the singleton.
	public meta?: MetaStore;

	constructor(config: QuickviewControllerStoreConfig) {
		super(config);

		this.quickview = new QuickviewStore();

		makeObservable(this, {
			quickview: observable,
		});
	}

	// Quickview has no server response to ingest; modal state lives on `this.quickview`.
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	public update(): void {}
}
