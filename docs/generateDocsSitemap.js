import fs from 'fs';
import documents from './documents.js';

// Generates docs-sitemap.json at the repository root: a mapping from each
// markdown file in the docs navigation (documents.js) to the public page that
// renders it. Consumed by the athos-mcp docs indexer so downstream tools
// (e.g. DocsBot) can cite public documentation pages instead of repo files.
//
//   node ./docs/generateDocsSitemap.js          regenerate the file
//   node ./docs/generateDocsSitemap.js --check  fail if the file is stale
//
// Hidden pages are included — they still render at their route. Entries keep
// documents.js order, and when several nav links reference the same markdown
// file, the first (most prominent) route wins.

const BASE_URL = 'https://athoscommerce.github.io/snap';
const OUTPUT_FILE = 'docs-sitemap.json';

const files = {}; // filePath -> { url: route, title: label }
const missing = [];

function walk(links) {
	for (const link of links) {
		if (link.type === 'markdown' && link.url && link.route) {
			const urls = Array.isArray(link.url) ? link.url : [link.url];
			for (const url of urls) {
				const filePath = url.replace(/^\.\//, '');
				if (!fs.existsSync(filePath)) {
					missing.push(`${filePath} (route ${link.route})`);
					continue;
				}
				if (!files[filePath]) {
					files[filePath] = { url: link.route, title: link.label };
				}
			}
		}

		if (link.links && Array.isArray(link.links)) {
			walk(link.links);
		}
	}
}

for (const section of documents) {
	if (section.links) {
		walk(section.links);
	}
}

if (missing.length > 0) {
	console.error(`documents.js references files that do not exist:`);
	for (const entry of missing) {
		console.error(`  - ${entry}`);
	}
	process.exit(1);
}

const sitemap = {
	version: 1,
	site: {
		baseUrl: BASE_URL,
		name: 'Snap Documentation',
	},
	files,
};

const output = `${JSON.stringify(sitemap, null, '\t')}\n`;

if (process.argv.includes('--check')) {
	const current = fs.existsSync(OUTPUT_FILE) ? fs.readFileSync(OUTPUT_FILE, 'utf8') : '';
	if (current !== output) {
		console.error(`${OUTPUT_FILE} is out of date with docs/documents.js — run "npm run build:sitemap" and commit the result.`);
		process.exit(1);
	}
	console.log(`${OUTPUT_FILE} is up to date`);
} else {
	fs.writeFileSync(OUTPUT_FILE, output);
	console.log(`Generated ${OUTPUT_FILE} (${Object.keys(files).length} pages)`);
}
