import ts from 'typescript';
import * as path from 'path';
import * as fs from 'fs';

/*
 * `validateTemplatesConfig`'s `theme.overrides.default` type is an intersection of a
 * generic per-selector-precise type and the concrete `ThemeComponentOverrides` alias.
 * The concrete half exists ONLY to give editor completions - see the sibling
 * `themeOverridesTyping.test.ts` for why the generic half can't be dropped either. A
 * type check can't observe completions regressing (the generic half alone still
 * type-checks everything correctly, it just can't suggest keys), so this test drives
 * the real TypeScript language service and asserts on `getCompletionsAtPosition`
 * directly, the same way an editor would.
 */

jest.setTimeout(30000);

const packageDir = path.resolve(__dirname, '../..');
const configPath = ts.findConfigFile(packageDir, ts.sys.fileExists, 'tsconfig.json');
if (!configPath) throw new Error('tsconfig.json not found for snap-preact');
const configFile = ts.readConfigFile(configPath, ts.sys.readFile);
const parsedConfig = ts.parseJsonConfigFileContent(configFile.config, ts.sys, packageDir);

const virtualFile = path.join(__dirname, '__themeOverridesCompletionsFixture.ts');

function fixtureSource(snippetAtCursor: string): string {
	return `
import { validateTemplatesConfig } from './SnapTemplates';

validateTemplatesConfig({
	config: { platform: 'other' },
	theme: {
		extends: 'base',
		overrides: {
			default: {
				result: { hideQuickviewButton: false },
				${snippetAtCursor}
			},
		},
	},
});
`;
}

const SENTINEL = '/*@@CURSOR@@*/';

function createService(content: string): ts.LanguageService {
	const files = new Map<string, string | undefined>(parsedConfig.fileNames.map((f) => [f, undefined]));
	files.set(virtualFile, content);

	const host: ts.LanguageServiceHost = {
		getScriptFileNames: () => Array.from(files.keys()),
		getScriptVersion: () => '1',
		getScriptSnapshot: (fileName) => {
			if (files.has(fileName) && files.get(fileName) !== undefined) {
				return ts.ScriptSnapshot.fromString(files.get(fileName) as string);
			}
			if (!fs.existsSync(fileName)) return undefined;
			return ts.ScriptSnapshot.fromString(fs.readFileSync(fileName).toString());
		},
		getCurrentDirectory: () => packageDir,
		getCompilationSettings: () => parsedConfig.options,
		getDefaultLibFileName: (options) => ts.getDefaultLibFilePath(options),
		fileExists: (fileName) => (files.has(fileName) ? true : ts.sys.fileExists(fileName)),
		readFile: (fileName) => (files.has(fileName) && files.get(fileName) !== undefined ? (files.get(fileName) as string) : ts.sys.readFile(fileName)),
		readDirectory: ts.sys.readDirectory,
		directoryExists: ts.sys.directoryExists,
		getDirectories: ts.sys.getDirectories,
	};

	return ts.createLanguageService(host, ts.createDocumentRegistry());
}

function completionNamesAt(snippetAtCursor: string): string[] {
	const withSentinel = fixtureSource(snippetAtCursor.replace('CURSOR', SENTINEL));
	const pos = withSentinel.indexOf(SENTINEL);
	const finalSource = withSentinel.replace(SENTINEL, '');
	const service = createService(finalSource);
	const completions = service.getCompletionsAtPosition(virtualFile, pos, {});
	return completions ? completions.entries.map((e) => e.name) : [];
}

describe('theme.overrides.default editor completions', () => {
	it('suggests selector keys at a new key position', () => {
		const names = completionNamesAt('CURSOR');

		// a handful of selectors spanning atoms/organisms - not exhaustive, just enough
		// to prove key completions come back at all (this is exactly what regresses to
		// zero if the concrete `ThemeComponentOverrides` half of the intersection is
		// dropped - see themeOverridesTyping.test.ts for the type-precision half)
		expect(names).toEqual(expect.arrayContaining(['icon', 'facets', 'button', 'sortBy']));
		expect(names.length).toBeGreaterThan(50);
	});

	it('suggests prop names once a selector key is chosen', () => {
		const names = completionNamesAt('icon: { CURSOR },');

		expect(names).toEqual(expect.arrayContaining(['icon', 'color', '$children']));
	});
});
