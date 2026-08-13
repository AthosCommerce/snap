import { url, StorageStore } from '@athoscommerce/snap-toolbox';
import type { ClientConfig } from '@athoscommerce/snap-client';

const DEFAULT_SITE_ID = 'atkzs2';

export function getDemoConfig() {
	let siteId = DEFAULT_SITE_ID;
	let customOrigin = '';
	let customChatOrigin = '';
	let clientConfig: ClientConfig = {};

	// grab siteId out of the URL
	const urlObj = url(window.location.href);
	const urlSiteIdParam = urlObj?.params.query.siteId || urlObj?.params.query.siteid;
	const urlOriginParam = urlObj?.params.query.origin;
	const urlChatOriginParam = urlObj?.params.query.chatOrigin;

	// determine siteId first so we can namespace the config storage
	// the shared store remembers the last-used siteId so paramless page loads keep it
	const sharedStore = new StorageStore({ type: 'local', key: 'athos-demo-config' });
	if (urlSiteIdParam && urlSiteIdParam.match(/[a-zA-Z0-9]{6}/)) {
		siteId = urlSiteIdParam;
	} else {
		const storedSiteId = sharedStore.get('siteId');
		if (storedSiteId) siteId = storedSiteId;
	}

	// namespace config storage per siteId so different tabs on the same domain don't conflict
	const configStore = new StorageStore({ type: 'local', key: `athos-demo-config-${siteId}` });

	if (urlSiteIdParam && urlSiteIdParam.match(/[a-zA-Z0-9]{6}/)) {
		configStore.set('siteId', siteId);
		sharedStore.set('siteId', siteId);

		// clear previously stored storage
		window.localStorage.removeItem('athos-history');
		window.sessionStorage.removeItem('athos-controller-search');
		window.sessionStorage.removeItem('athos-controller-autocomplete');
	}

	if (urlOriginParam) {
		customOrigin = urlOriginParam;
		configStore.set('origin', urlOriginParam);
	} else {
		const storedOrigin = configStore.get('origin');
		if (storedOrigin) customOrigin = storedOrigin;
	}

	// custom chat origin
	if (urlChatOriginParam) {
		customChatOrigin = urlChatOriginParam;
		configStore.set('chatOrigin', urlChatOriginParam);
	} else {
		const storedOrigin = configStore.get('chatOrigin');
		if (storedOrigin) customChatOrigin = storedOrigin;
	}

	// if there is a custom origin set clientConfig
	if (customOrigin) {
		clientConfig = {
			meta: {
				origin: customOrigin,
			},
			search: {
				origin: customOrigin,
			},
			recommend: {
				origin: customOrigin,
			},
			suggest: {
				origin: customOrigin,
			},
		};
	} else if (!siteId.startsWith('at')) {
		clientConfig = {
			meta: {
				origin: `https://${siteId}.a.searchspring.io`,
			},
			search: {
				origin: `https://${siteId}.a.searchspring.io`,
			},
			recommend: {
				origin: `https://${siteId}.a.searchspring.io`,
			},
			suggest: {
				origin: `https://${siteId}.a.searchspring.io`,
			},
		};
	}

	if (customChatOrigin) {
		clientConfig.chat = {
			origin: customChatOrigin,
		};
	}

	return { siteId, clientConfig };
}
