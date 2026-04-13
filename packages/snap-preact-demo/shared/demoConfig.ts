import { url } from '@athoscommerce/snap-toolbox';
import { StorageStore } from '@athoscommerce/snap-store-mobx';
import type { ClientConfig } from '@athoscommerce/snap-client';

const DEFAULT_SITE_ID = 'atkzs2';

const configStore = new StorageStore({ type: 'local', key: 'athos-demo-config' });

export function getDemoConfig() {
	let siteId = DEFAULT_SITE_ID;
	let customOrigin = '';
	let customChatOrigin = '';
	let clientConfig: ClientConfig = {};

	// grab siteId out of the URL
	const urlObj = url(window.location.href);
	const urlSiteIdParam = urlObj?.params.query.siteId || urlObj?.params.query.siteid;
	const urlOriginParam = urlObj?.params.query.origin || urlObj?.params.query.searchOrigin;
	const urlChatOriginParam = urlObj?.params.query.chatOrigin;

	// custom siteId
	if (urlSiteIdParam && urlSiteIdParam.match(/[a-zA-Z0-9]{6}/)) {
		siteId = urlSiteIdParam;
		configStore.set('siteId', siteId);

		// clear previously stored storage
		window.localStorage.removeItem('athos-history');
		window.sessionStorage.removeItem('athos-controller-search');
		window.sessionStorage.removeItem('athos-controller-autocomplete');
	} else {
		// use siteId from storage
		const storedSiteId = configStore.get('siteId');
		if (storedSiteId) siteId = storedSiteId;
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
			chat: {
				origin: 'https://asklo-backend.service-qa.ksearchnet.com',
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
