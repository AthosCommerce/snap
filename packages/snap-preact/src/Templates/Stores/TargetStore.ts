import { observable, makeObservable } from 'mobx';
import { TemplateTarget, type TemplateTypes, type TemplateThemeTypes } from './TemplateStore';

export const GLOBAL_THEME_NAME = 'global';

type TargetStoreConfig = {
	target: TemplateTarget & {
		index: number;
	};
};
export class TargetStore {
	public index: number;
	public type: TemplateTypes;
	public selector: string;
	public component: string;
	public emptyTarget?: boolean;
	public theme: {
		location: TemplateThemeTypes;
		name: string;
	};

	constructor(params: TargetStoreConfig) {
		const { target } = params;

		this.index = target.index;
		this.type = target.type;
		this.selector = target.selector || '';
		this.component = target.component || '';
		this.emptyTarget = target.emptyTarget;
		this.theme = {
			location: 'local',
			name: GLOBAL_THEME_NAME,
		};

		makeObservable(this, {
			component: observable,
			selector: observable,
			theme: observable,
		});
	}

	public setValue(name: string, value: string) {
		switch (name) {
			case 'selector':
				this.selector = value;
				break;
			case 'component':
				this.component = value;
				break;
		}
	}

	public setTheme(themeName: string, location: TemplateThemeTypes) {
		this.theme = {
			location,
			name: themeName,
		};
	}
}
