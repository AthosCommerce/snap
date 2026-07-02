/*
	proposed file naming conventions

	query.red.yaml

	query.{ actual query }.json
	query.{ actual query }.sort.price.desc.json
	filteredHierarchy.json
*/

import * as fs from 'fs';
import deepmerge from 'deepmerge';
import type { MetaResponseModel, SearchResponseModel, AutocompleteResponseModel } from '@athoscommerce/snapi-types';
import { RecommendCombinedResponseModel, ChatResponseModel, ChatStatusResponse } from '@athoscommerce/snap-client';

type ChatInitResponseModel = { chatSessionId: string; sessionEndTime: string };
type UploadImageResponseModel = { imageId: string; imageUrl: string; thumbnailUrl: string };

type MockDataConfig = {
	siteId?: string;
	meta?: string;
	search?: string;
	autocomplete?: string;
	trending?: string;
	chat?: string;
	chatInit?: string;
	chatStatus?: string;
	uploadImage?: string;
	recommend?: {
		profile?: string;
		results?: string;
	};
};

const defaultConfig: MockDataConfig = {
	siteId: '8uyt2m',
	meta: 'meta',
	search: 'default',
	autocomplete: 'default',
	trending: 'default',
	chat: 'default',
	chatInit: 'chatInit',
	chatStatus: 'chatStatus',
	uploadImage: 'uploadImage',
	recommend: {
		profile: 'default',
		results: 'default',
	},
};

export class MockData {
	initialConfig: MockDataConfig;
	config = defaultConfig;

	constructor(config?: MockDataConfig) {
		this.initialConfig = config || defaultConfig;
		this.updateConfig(this.initialConfig);
	}

	updateConfig(config: MockDataConfig): MockData {
		this.config = deepmerge(this.config, config || {});
		return this;
	}

	resetConfig(): MockData {
		this.config = defaultConfig;
		this.updateConfig(this.initialConfig);
		return this;
	}

	meta(file?: string): MetaResponseModel {
		const metaFile = `${__dirname}/meta/${this.config.siteId}/${file || this.config.meta}.json`;
		try {
			return getJSON(metaFile);
		} catch (err) {
			throw `Meta JSON '${metaFile}' not found.`;
		}
	}

	search(file?: string): SearchResponseModel {
		const searchFile = `${__dirname}/search/${this.config.siteId}/${file || this.config.search}.json`;
		try {
			return getJSON(searchFile);
		} catch (err) {
			throw `Search JSON '${searchFile}' not found.`;
		}
	}

	autocomplete(file?: string): AutocompleteResponseModel {
		const autocompleteFile = `${__dirname}/autocomplete/${this.config.siteId}/${file || this.config.autocomplete}.json`;
		try {
			return getJSON(autocompleteFile);
		} catch (err) {
			throw `AC JSON '${autocompleteFile}' not found.`;
		}
	}

	trending(file?: string) {
		const trendingFile = `${__dirname}/trending/${this.config.siteId}/${file || this.config.trending}.json`;
		try {
			return getJSON(trendingFile);
		} catch (err) {
			throw `Trending JSON '${trendingFile}' not found.`;
		}
	}

	searchMeta(file?: string): { meta: MetaResponseModel; search: SearchResponseModel } {
		try {
			return { meta: this.meta(), search: this.search(file) };
		} catch (err) {
			throw `SearchMeta JSON not found: ${err}`;
		}
	}

	autocompleteMeta(file?: string): { meta: MetaResponseModel; search: AutocompleteResponseModel } {
		try {
			return { meta: this.meta(), search: this.autocomplete(file) };
		} catch (err) {
			throw `AutocompleteMeta JSON not found: ${err}`;
		}
	}

	file(path?: string) {
		const dataFile = `${__dirname}/${path}`;
		try {
			return getJSON(dataFile);
		} catch (err) {
			throw `Data file '${dataFile}' not found!`;
		}
	}

	chat(file?: string): ChatResponseModel {
		const chatFile = `${__dirname}/chat/${this.config.siteId}/${file || this.config.chat}.json`;
		try {
			return getJSON(chatFile);
		} catch (err) {
			throw `Chat JSON '${chatFile}' not found.`;
		}
	}

	chatMeta(file?: string): { meta: MetaResponseModel; chat: ChatResponseModel } {
		try {
			return { meta: this.meta(), chat: this.chat(file) };
		} catch (err) {
			throw `ChatMeta JSON not found: ${err}`;
		}
	}

	chatInit(file?: string): ChatInitResponseModel {
		const chatInitFile = `${__dirname}/chat/${this.config.siteId}/${file || this.config.chatInit}.json`;
		try {
			return getJSON(chatInitFile);
		} catch (err) {
			throw `ChatInit JSON '${chatInitFile}' not found.`;
		}
	}

	chatStatus(file?: string): ChatStatusResponse {
		const chatStatusFile = `${__dirname}/chat/${this.config.siteId}/${file || this.config.chatStatus}.json`;
		try {
			return getJSON(chatStatusFile);
		} catch (err) {
			throw `ChatStatus JSON '${chatStatusFile}' not found.`;
		}
	}

	uploadImage(file?: string): UploadImageResponseModel {
		const uploadImageFile = `${__dirname}/chat/${this.config.siteId}/${file || this.config.uploadImage}.json`;
		try {
			return getJSON(uploadImageFile);
		} catch (err) {
			throw `UploadImage JSON '${uploadImageFile}' not found.`;
		}
	}

	recommend(files?: { profileFile?: string; resultsFile?: string }): RecommendCombinedResponseModel {
		const profileFile = `${__dirname}/recommend/profile/${this.config.siteId}/${files?.profileFile || this.config.recommend?.profile}.json`;
		const resultsFile = `${__dirname}/recommend/results/${this.config.siteId}/${files?.resultsFile || this.config.recommend?.results}.json`;
		try {
			return {
				meta: this.meta(),
				profile: getJSON(profileFile).profile,
				results: getJSON(resultsFile)[0].results,
				responseId: getJSON(resultsFile)[0].responseId || 'responseId-mock', // TODO remove fallback
			};
		} catch (err) {
			throw `Recommend JSON not found. Profile: '${profileFile}', Results: '${resultsFile}'`;
		}
	}
}

function getJSON(file: string) {
	const json = fs.readFileSync(file, 'utf8');
	return JSON.parse(json);
}
