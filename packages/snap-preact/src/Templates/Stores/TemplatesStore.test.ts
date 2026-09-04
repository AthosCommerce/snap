import { waitFor } from '@testing-library/preact';

import { TemplatesStore, TemplateTarget, transformCurrencyOverridesToTheme, withCurrencyCode } from './TemplateStore';
import type { SnapTemplatesConfig } from '../SnapTemplates';
import { GLOBAL_THEME_NAME, TargetStore } from './TargetStore';
//todo - these tests sometimes take over 10 seconds to run, currently unclear why.
describe('TemplateStore', () => {
	it('has expected defaults', () => {
		const config: SnapTemplatesConfig = {
			config: {
				platform: 'other',
			},
			theme: {
				extends: 'base',
			},
		};
		const store = new TemplatesStore({ config });
		expect(store).toBeDefined();
		expect(store.loading).toBe(true);
		expect(store.config).toBe(config);
		expect(store.language).toBe('en');
		expect(store.currency).toBe('usd');
		expect(store.window.innerWidth).toBe(global.window.innerWidth);
	});

	it('can define config', () => {
		const config: SnapTemplatesConfig = {
			theme: {
				extends: 'base',
			},
			config: {
				siteId: '8uyt2m',
				currency: 'eur',
				platform: 'other',
				language: 'fr',
			},
		};
		const store = new TemplatesStore({ config });
		expect(store.config).toBe(config);
		expect(store.language).toBe(config.config?.language);
		expect(store.currency).toBe(config.config?.currency);
	});

	it("fallsback if language and currency doesn't exist", () => {
		const consoleWarn = jest.spyOn(console, 'warn').mockImplementation(() => {});
		const config: SnapTemplatesConfig = {
			theme: {
				extends: 'base',
			},
			config: {
				siteId: '8uyt2m',
				// @ts-ignore - testing invalid values
				currency: 'dne',
				// @ts-ignore - testing invalid values
				language: 'dne',
			},
		};
		const store = new TemplatesStore({ config });
		expect(store.config).toBe(config);
		expect(store.language).toBe('en');
		expect(store.currency).toBe('usd');
		expect(consoleWarn).toHaveBeenCalledWith(expect.stringContaining('unknown language code "dne"'));
		expect(consoleWarn).toHaveBeenCalledWith(expect.stringContaining('unknown currency code "dne"'));
		consoleWarn.mockRestore();
	});

	it('supports uppercase language and currency codes by normalizing to lowercase', async () => {
		const config: SnapTemplatesConfig = {
			theme: {
				extends: 'base',
			},
			config: {
				siteId: '8uyt2m',
				currency: 'EUR',
				language: 'FR',
			},
		};
		const store = new TemplatesStore({ config });
		expect(store.language).toBe('fr');
		expect(store.currency).toBe('eur');

		await store.setCurrency('AUD');
		await store.setLanguage('ES');

		expect(store.currency).toBe('aud');
		expect(store.language).toBe('es');
	});

	it('warns and keeps the current currency when setCurrency is given an unknown code', async () => {
		const consoleWarn = jest.spyOn(console, 'warn').mockImplementation(() => {});
		const config: SnapTemplatesConfig = {
			theme: {
				extends: 'base',
			},
			config: {
				siteId: '8uyt2m',
			},
		};
		const store = new TemplatesStore({ config });

		// @ts-ignore - testing invalid values
		await store.setCurrency('dne');
		// @ts-ignore - testing invalid values
		await store.setLanguage('dne');

		expect(store.currency).toBe('usd');
		expect(store.language).toBe('en');
		expect(consoleWarn).toHaveBeenCalledWith(expect.stringContaining('unknown currency code "dne"'));
		expect(consoleWarn).toHaveBeenCalledWith(expect.stringContaining('unknown language code "dne"'));
		consoleWarn.mockRestore();
	});

	it('can change language and currency', async () => {
		const config: SnapTemplatesConfig = {
			theme: {
				extends: 'base',
			},
			config: {
				siteId: '8uyt2m',
				platform: 'other',
			},
		};
		const store = new TemplatesStore({ config });
		expect(store.language).toBe('en');
		expect(store.currency).toBe('usd');

		await store.setLanguage('fr');
		await store.setCurrency('eur');

		expect(store.language).toBe('fr');
		expect(store.currency).toBe('eur');
	});

	it('can change innerWidth', () => {
		const config: SnapTemplatesConfig = {
			theme: {
				extends: 'base',
			},
			config: {
				siteId: '8uyt2m',
				platform: 'other',
			},
		};
		const store = new TemplatesStore({ config });
		expect(store.window.innerWidth).toBe(global.window.innerWidth);

		const width = 1000;
		// @ts-ignore - private method
		store.setInnerWidth(width);

		expect(store.window.innerWidth).toBe(width);
	});

	it('can addTheme', async () => {
		const theme = GLOBAL_THEME_NAME;
		const config: SnapTemplatesConfig = {
			config: {
				platform: 'other',
			},
			theme: {
				extends: 'pike',
			},
		};
		const store = new TemplatesStore({ config });

		// addTheme from config
		const spy = jest.spyOn(store, 'addTheme');
		expect(store.library.import.theme[config.theme.extends]).toBeDefined();
		expect(store.library.themes[config.theme.extends]).toBeUndefined();
		expect(spy).toHaveBeenCalledTimes(0);
		await waitFor(() => expect(store.library.themes[config.theme.extends]).toBeDefined());
		expect(spy).toHaveBeenCalledTimes(1);

		expect(store.themes.local[theme]).toBeDefined();
		expect(store.getThemeStore(theme)).toBe(store.themes.local[theme]);
		const storeTheme = store.getThemeStore(theme);
		expect(storeTheme?.name).toBe(theme);
		// @ts-ignore - private property
		expect(storeTheme.base.name).toBe(config.theme.extends);
		spy.mockClear();

		// addTheme manual call
		const base = await store.library.import.theme.base();
		const customTheme = 'customTheme';

		store.addTheme({
			name: customTheme,
			type: 'local',
			base,
			overrides: {},
			variables: {},
			currency: {},
			language: {},
			languageOverrides: {},
			innerWidth: store.window.innerWidth,
			style: undefined,
		});
		expect(store.themes.local[customTheme]).toBeDefined();
		expect(store.getThemeStore(customTheme)).toBe(store.themes.local[customTheme]);
		const newTheme = store.getThemeStore(customTheme);
		expect(newTheme?.name).toBe(customTheme);
		// @ts-ignore - private property
		expect(newTheme.base.name).toBe('base');
	});

	it('can addTarget', async () => {
		const theme = GLOBAL_THEME_NAME;
		const config: SnapTemplatesConfig = {
			config: {
				platform: 'other',
			},
			theme: {
				extends: 'base',
			},
		};
		const store = new TemplatesStore({ config });
		const type = 'search';
		const target: TemplateTarget = {
			type,
			selector: '.test',
			component: 'Search',
		};
		const targetObject = store.addTarget(target);
		expect(targetObject).toBeDefined();
		// need to expect that targetObject is an instance of TargetStore
		expect(targetObject).toBeInstanceOf(TargetStore);
		// need to expect it has the correct values
		expect(targetObject?.selector).toBe(target.selector);
		expect(targetObject?.component).toBe(target.component);

		expect(store.targets[type][targetObject!.index]).toBeDefined();
		expect(store.getTarget(target.type, targetObject!.index)).toBe(targetObject);
	});
});

describe('transformCurrencyOverridesToTheme', () => {
	const currencies = {
		aed: {
			price: {
				symbol: 'د.إ',
				symbolAfter: true,
			},
		},
		usd: {
			price: {
				showCode: true,
			},
		},
	};

	it('wraps the overrides for the given currency in a theme layer', () => {
		expect(transformCurrencyOverridesToTheme(currencies, 'aed')).toStrictEqual({
			components: {
				price: {
					symbol: 'د.إ',
					symbolAfter: true,
				},
			},
		});
	});

	it('returns only the requested currency', () => {
		expect(transformCurrencyOverridesToTheme(currencies, 'usd')).toStrictEqual({
			components: { price: { showCode: true } },
		});
	});

	it('returns an empty layer for a currency with no overrides', () => {
		expect(transformCurrencyOverridesToTheme(currencies, 'eur')).toStrictEqual({});
	});

	it('returns an empty layer when nothing is configured', () => {
		expect(transformCurrencyOverridesToTheme(undefined, 'aed')).toStrictEqual({});
		expect(transformCurrencyOverridesToTheme({}, 'aed')).toStrictEqual({});
	});

	it('accepts uppercase keys the way config.currency does', () => {
		const uppercase = { AED: { price: { symbol: 'X' } } } as unknown as typeof currencies;

		expect(transformCurrencyOverridesToTheme(uppercase, 'aed')).toStrictEqual({
			components: { price: { symbol: 'X' } },
		});
	});

	it('is not confused by a currency code that is also a component name', () => {
		// codes are three letters, so this only guards against an accidental lookup by component
		expect(transformCurrencyOverridesToTheme({ aed: { price: {} } }, 'aed')).toStrictEqual({
			components: { price: {} },
		});
	});
});

describe('withCurrencyCode', () => {
	it('adds the uppercased ISO code to the price component', () => {
		expect(withCurrencyCode('sek', { components: { price: { symbol: '\u00A0kr' } } })).toStrictEqual({
			components: { price: { symbol: '\u00A0kr', code: 'SEK' } },
		});
	});

	it('adds the code to an empty locale layer', () => {
		expect(withCurrencyCode('usd', {})).toStrictEqual({ components: { price: { code: 'USD' } } });
	});

	it('does not mutate the locale layer it is given', () => {
		const locale = { components: { price: { symbol: '$' } } };
		withCurrencyCode('usd', locale);

		expect(locale).toStrictEqual({ components: { price: { symbol: '$' } } });
	});
});
