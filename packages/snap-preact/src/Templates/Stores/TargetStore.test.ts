import { StorageStore } from '@athoscommerce/snap-store-mobx';
import { GLOBAL_THEME_NAME, TargetStore } from './TargetStore';
import { TemplatesStoreDependencies, TemplatesStoreSettings, TemplateTarget, TemplateThemeTypes } from './TemplateStore';

describe('TargetStore', () => {
	let dependencies: TemplatesStoreDependencies;
	let settings: TemplatesStoreSettings;

	it('has expected defaults', () => {
		const target: TemplateTarget = {
			index: 0,
			type: 'search',
			component: '',
		};
		const store = new TargetStore({ target });
		expect(store).toBeDefined();
		expect(store.selector).toStrictEqual('');
		expect(store.component).toStrictEqual('');
		expect(store.theme).toStrictEqual({
			location: 'local',
			name: GLOBAL_THEME_NAME,
		});
		// @ts-ignore - private property
		expect(store.dependencies).toBe(dependencies);
	});

	it('can create a TargetStore', () => {
		const target: TemplateTarget = {
			index: 0,
			type: 'search',
			selector: '.test',
			component: 'Search',
		};
		const store = new TargetStore({ target });
		expect(store).toBeDefined();
		expect(store.selector).toStrictEqual(target.selector);
		expect(store.component).toStrictEqual(target.component);
		expect(store.theme).toStrictEqual({
			location: 'local',
			name: GLOBAL_THEME_NAME,
		});
	});

	it('can setComponent, setTheme', () => {
		const target: TemplateTarget = {
			index: 0,
			type: 'search',
			selector: '.test',
			component: 'Search',
		};
		const store = new TargetStore({ target });

		expect(store.component).toStrictEqual('Search');
		store.setValue('component', 'NewSearch');
		expect(store.component).toStrictEqual('NewSearch');

		expect(store.theme).toStrictEqual({
			location: 'local',
			name: GLOBAL_THEME_NAME,
		});
		store.setTheme('newTheme', 'local' as TemplateThemeTypes);
		expect(store.theme).toStrictEqual({
			location: 'local',
			name: 'newTheme',
		});
	});
});
