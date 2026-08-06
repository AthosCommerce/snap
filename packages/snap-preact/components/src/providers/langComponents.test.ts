import * as fs from 'fs';
import * as path from 'path';

const COMPONENTS_DIR = path.resolve(__dirname, '../components');
const LANG_COMPONENTS_FILE = path.resolve(__dirname, 'langComponents.ts');

function findLangTypes(dir: string): { typeName: string; file: string }[] {
	const results: { typeName: string; file: string }[] = [];
	const langExportPattern = /export\s+(?:type|interface)\s+(\w+Lang)\b/g;

	function walk(currentDir: string) {
		for (const entry of fs.readdirSync(currentDir, { withFileTypes: true })) {
			const fullPath = path.join(currentDir, entry.name);
			if (entry.isDirectory()) {
				walk(fullPath);
			} else if (entry.isFile() && /\.tsx?$/.test(entry.name) && !entry.name.includes('.test.')) {
				const content = fs.readFileSync(fullPath, 'utf-8');
				let match;
				while ((match = langExportPattern.exec(content)) !== null) {
					results.push({ typeName: match[1], file: path.relative(COMPONENTS_DIR, fullPath) });
				}
			}
		}
	}

	walk(dir);
	return results;
}

// infrastructure types that are not component-level lang overrides
const IGNORED_LANG_TYPES = new Set(['LangAttributesObj', 'LangAttributesObjAttributes', 'LangType', 'LangObjType', 'LangValue', 'LangAttributes']);

// component Lang types intentionally excluded from LangComponents
const EXCLUDED_LANG_TYPES = new Set(['AutocompleteLang', 'BundledCTALang', 'BundleSelectorLang']);

describe('langComponents', () => {
	it('should include all exported component Lang types in the LangComponents type', () => {
		const langComponentsContent = fs.readFileSync(LANG_COMPONENTS_FILE, 'utf-8');
		const allLangTypes = findLangTypes(COMPONENTS_DIR);

		// extract only uncommented import lines
		const activeImports = langComponentsContent.split('\n').filter((line) => /^\s*import\s/.test(line));

		// extract only uncommented member lines from the LangComponents type body
		const typeBodyMatch = langComponentsContent.match(/export\s+type\s+LangComponents\s*=\s*\{([\s\S]*)\};/);
		const typeBody = typeBodyMatch ? typeBodyMatch[1] : '';
		const activeMembers = typeBody.split('\n').filter((line) => !line.trimStart().startsWith('//'));

		const missing: { typeName: string; file: string }[] = [];

		for (const { typeName, file } of allLangTypes) {
			if (IGNORED_LANG_TYPES.has(typeName)) continue;
			if (EXCLUDED_LANG_TYPES.has(typeName)) continue;

			const isImported = activeImports.some((line) => line.includes(typeName));
			const isInType = activeMembers.some((line) => line.includes(typeName));

			if (!isImported || !isInType) {
				missing.push({ typeName, file });
			}
		}

		if (missing.length > 0) {
			const details = missing.map((m) => `  - ${m.typeName} (${m.file})`).join('\n');
			throw new Error(`The following Lang types are missing from the LangComponents type in langComponents.ts:\n${details}`);
		}
	});
});
